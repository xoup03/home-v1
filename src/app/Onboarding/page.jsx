"use client";
import React, { useState, useEffect, Suspense } from "react";
import { useRouter } from "next/navigation";
import { CldUploadWidget } from "next-cloudinary";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import bannerImg from "../../assets/Onboarding.svg";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Toaster, toast } from 'sonner';
import { useSearchParams } from "next/navigation";

// Form validation schemas for each step
const step1Schema = z.object({
  name: z.string().min(2, "Restaurant name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  logo_url: z.string().url("Invalid URL").optional().or(z.literal("")),
  password: z.string()
    .min(8, "Password must be at least 8 characters")
    .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, 
      "Password must contain at least one letter, one number, and one special character"),
});

const step2Schema = z.object({
  type: z.string().min(2, "Restaurant type is required"),
  description: z.string().optional(),
  address: z.string().min(5, "Address must be at least 5 characters"),
  gstin: z.string()
    .max(15, "GSTIN must be 15 characters")
    .regex(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/, "Invalid GSTIN format")
    .optional()
    .or(z.literal("")),
  categories: z.array(z.string()).optional(),
});

const step3Schema = z.object({
  opening_time: z.string().min(1, "Opening time is required"),
  closing_time: z.string().min(1, "Closing time is required"),
  is_veg_only: z.boolean(),
  is_cash_only: z.boolean(),
  is_seating: z.boolean(),
  is_takeaway: z.boolean(),
  tables: z.string().optional(),
  feedback_url: z.string().url("Invalid feedback URL").optional().or(z.literal("")),
  review_url: z.string().url("Invalid review URL").optional().or(z.literal("")),
});

const step4Schema = z.object({
  cgst: z.string().min(1, "CGST is required").regex(/^\d+(\.\d{1,2})?$/, "Invalid CGST value"),
  sgst: z.string().min(1, "SGST is required").regex(/^\d+(\.\d{1,2})?$/, "Invalid SGST value"),
  discount: z.string().regex(/^\d+(\.\d{1,2})?$/, "Invalid discount value").optional().or(z.literal("")),
});

// Create a wrapper component that uses useSearchParams
function OnboardingFormWrapper() {
  const searchParam = useSearchParams();
  const token = searchParam.get("token");

  return <OnboardingForm token={token} />;
}

// Modify the main component to accept token as prop
function OnboardingForm({ token }) {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [logoUrl, setLogoUrl] = useState("");

  // Initialize forms for each step
  const step1Form = useForm({
    resolver: zodResolver(step1Schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      logo_url: "",
      password: "",
    },
  });

  const step2Form = useForm({
    resolver: zodResolver(step2Schema),
    defaultValues: {
      type: "",
      description: "",
      address: "",
      gstin: "",
      categories: [],
    },
  });

  const step3Form = useForm({
    resolver: zodResolver(step3Schema),
    defaultValues: {
      opening_time: "",
      closing_time: "",
      is_veg_only: false,
      is_cash_only: false,
      is_seating: false,
      is_takeaway: false,
      tables: "",
      feedback_url: "",
      review_url: "",
    },
  });

  const step4Form = useForm({
    resolver: zodResolver(step4Schema),
    defaultValues: {
      cgst: "",
      sgst: "",
      discount: "",
    },
  });

  // Update logo_url in the form when logoUrl state changes
  useEffect(() => {
    if (logoUrl) {
      step1Form.setValue("logo_url", logoUrl);
    }
  }, [logoUrl, step1Form]);

  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5012";

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const isStep4Valid = await step4Form.trigger();
      if (!isStep4Valid) {
        setIsSubmitting(false);
        return;
      }

      const formData = {
        ...step1Form.getValues(),
        ...step2Form.getValues(),
        ...step3Form.getValues(),
        ...step4Form.getValues(),
        logo_url: logoUrl || step1Form.getValues().logo_url,
        is_open: true,
      };

      const response = await fetch(`${BASE_URL}/api/v1/restaurant/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to create restaurant");
      }

      toast.success("Success!");
      step1Form.reset();
      step2Form.reset();
      step3Form.reset();
      step4Form.reset();
      setLogoUrl("");
      setCurrentStep(1);
      router.push("/dashboard");
    } catch (err) {
      toast.error(err.message || "Something went wrong. Please try again.", {
        description: "Error details here",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = async () => {
    try {
      switch (currentStep) {
        case 1:
          const isStep1Valid = await step1Form.trigger();
          console.log('Step 1 Form Errors:', step1Form.formState.errors);
          if (isStep1Valid) {
            setCurrentStep(2);
          } else {
            const errorFields = Object.keys(step1Form.formState.errors);
            toast.error(`Please check: ${errorFields.join(', ')}`);
          }
          break;
        case 2:
          const isStep2Valid = await step2Form.trigger();
          if (isStep2Valid) {
            setCurrentStep(3);
          } else {
            toast.error("Please fill all required fields correctly");
          }
          break;
        case 3:
          const isStep3Valid = await step3Form.trigger();
          if (isStep3Valid) {
            setCurrentStep(4);
          } else {
            toast.error("Please fill all required fields correctly");
          }
          break;
        default:
          setCurrentStep(prev => Math.min(prev + 1, totalSteps));
      }
    } catch (error) {
      console.error("Validation error:", error);
      toast.error("Please check your inputs and try again");
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const renderStepIndicator = () => {
    return (
      <div className="w-full mb-4">
        <div className="flex justify-between mb-2 text-sm text-gray-500">
          <span>Step {currentStep} of {totalSteps}</span>
          <span>{((currentStep / totalSteps) * 100).toFixed(0)}%</span>
        </div>
        <Progress value={(currentStep / totalSteps) * 100} className="h-2" />
      </div>
    );
  };

  const renderForm = () => {
    switch (currentStep) {
      case 1:
        return (
          <Form {...step1Form} key="step-1">
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <h3 className="text-xl font-semibold">Basic Information</h3>
              <FormField
                control={step1Form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Restaurant Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter restaurant name" {...field} value={field.value ?? ""} onChange={(e) => field.onChange(e.target.value)} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <FormField
                  control={step1Form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="email@example.com" {...field} value={field.value ?? ""} onChange={(e) => field.onChange(e.target.value)} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={step1Form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="(555) 123-4567" {...field} value={field.value ?? ""} onChange={(e) => field.onChange(e.target.value)} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={step1Form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input 
                        type="password"
                        placeholder="Enter password"
                        {...field}
                        value={field.value ?? ""}
                        onChange={(e) => field.onChange(e.target.value)}
                      />
                    </FormControl>
                    <FormDescription className="text-xs">
                      Must contain at least 8 characters, one letter, one number, and one special character
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={step1Form.control}
                name="logo_url"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Restaurant Logo</FormLabel>
                    <div className="flex gap-2">
                      <FormControl>
                        <Input placeholder="Or enter URL directly" {...field} value={field.value ?? ""} onChange={(e) => field.onChange(e.target.value)} />
                      </FormControl>
                      <CldUploadWidget
                        uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
                        onSuccess={(result) => {
                          const url = result.info.secure_url;
                          setLogoUrl(url);
                          step1Form.setValue("logo_url", url);
                        }}
                      >
                        {({ open }) => (
                          <Button type="button" variant="outline" onClick={() => open()}>
                            Upload
                          </Button>
                        )}
                      </CldUploadWidget>
                    </div>
                    <FormDescription className="text-xs">
                      Upload your restaurant logo or paste a URL
                    </FormDescription>
                    <FormMessage />
                    {logoUrl && (
                      <div className="mt-2">
                        <img
                          src={logoUrl}
                          alt="Logo preview"
                          className="h-16 w-16 object-contain rounded-md border"
                        />
                      </div>
                    )}
                  </FormItem>
                )}
              />
              
            </form>
          </Form>
        );

      case 2:
        return (
          <Form {...step2Form} key="step-2">
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <h3 className="text-xl font-semibold">Restaurant Details</h3>
              <FormField
                control={step2Form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Restaurant Address</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="123 Main St, City, State, ZIP"
                        {...field}
                        rows={2}
                        value={field.value ?? ""}
                        onChange={(e) => field.onChange(e.target.value)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={step2Form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Restaurant Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value ?? ""}
                      defaultValue={field.value ?? ""}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="QSR">QSR (Quich Service Restaurant)</SelectItem>
                        <SelectItem value="DINEIN">Dining</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={step2Form.control}
                name="gstin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>GSTIN (Optional)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g., 07AAAAA0000A1Z8"
                        value={field.value ?? ""}
                        onChange={(e) => {
                          const value = e.target.value.toUpperCase();
                          field.onChange(value);
                        }}
                        maxLength={15}
                      />
                    </FormControl>
                    <FormDescription className="text-xs">
                      15-digit format: State code + PAN + Entity code + Z + Check digit
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={step2Form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your restaurant..."
                        {...field}
                        rows={2}
                        value={field.value ?? ""}
                        onChange={(e) => field.onChange(e.target.value)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={step2Form.control}
                name="categories"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Categories (Optional)</FormLabel>
                    <FormControl>
                      <div className="flex flex-wrap gap-2">
                        {["Indian", "Chinese", "Fast Food", "Italian", "Mexican"].map((category) => (
                          <Button
                            key={category}
                            type="button"
                            variant={field.value?.includes(category) ? "default" : "outline"}
                            onClick={() => {
                              const current = field.value || [];
                              const updated = current.includes(category)
                                ? current.filter(c => c !== category)
                                : [...current, category];
                              field.onChange(updated);
                            }}
                            className="px-3 py-1 h-8"
                          >
                            {category}
                          </Button>
                        ))}
                      </div>
                    </FormControl>
                    <FormDescription className="text-xs">
                      Select one or more categories that best describe your restaurant
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        );

      case 3:
        return (
          <Form {...step3Form} key="step-3">
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <h3 className="text-xl font-semibold">Operations & Preferences</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <FormField
                  control={step3Form.control}
                  name="opening_time"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Opening Time</FormLabel>
                      <FormControl>
                        <Input 
                          type="time" 
                          {...field} 
                          value={field.value ?? ""} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={step3Form.control}
                  name="closing_time"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Closing Time</FormLabel>
                      <FormControl>
                        <Input type="time" {...field} value={field.value ?? ""} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={step3Form.control}
                name="has_tables"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel>Do you have dine-in tables?</FormLabel>
                    <div className="flex gap-2">
                      <Button
                        type="button"
                        variant={field.value ? "default" : "outline"}
                        onClick={() => {
                          step3Form.setValue("has_tables", true);
                          step3Form.setValue("is_seating", true);
                        }}
                      >
                        Yes
                      </Button>
                      <Button
                        type="button"
                        variant={!field.value ? "default" : "outline"}
                        onClick={() => {
                          step3Form.setValue("has_tables", false);
                          step3Form.setValue("tables", "");
                        }}
                      >
                        No
                      </Button>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {step3Form.watch("has_tables") && (
                <FormField
                  control={step3Form.control}
                  name="tables"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Number of Tables</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter number of tables"
                          {...field}
                          value={field.value ?? ""}
                          onChange={(e) => field.onChange(e.target.value)}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
              <div className="space-y-1">
                <FormLabel>Restaurant Options</FormLabel>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <FormField
                    control={step3Form.control}
                    name="is_veg_only"
                    render={({ field }) => (
                      <FormItem className="flex items-center justify-between rounded-lg border p-2">
                        <div>
                          <FormLabel className="text-sm">Vegetarian Only</FormLabel>
                        </div>
                        <FormControl>
                          <Switch
                            checked={field.value ?? false}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={step3Form.control}
                    name="is_cash_only"
                    render={({ field }) => (
                      <FormItem className="flex items-center justify-between rounded-lg border p-2">
                        <div>
                          <FormLabel className="text-sm">Cash Only</FormLabel>
                        </div>
                        <FormControl>
                          <Switch
                            checked={field.value ?? false}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={step3Form.control}
                    name="is_seating"
                    render={({ field }) => (
                      <FormItem className="flex items-center justify-between rounded-lg border p-2">
                        <div>
                          <FormLabel className="text-sm">Seating Available</FormLabel>
                        </div>
                        <FormControl>
                          <Switch
                            checked={field.value ?? false}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={step3Form.control}
                    name="is_takeaway"
                    render={({ field }) => (
                      <FormItem className="flex items-center justify-between rounded-lg border p-2">
                        <div>
                          <FormLabel className="text-sm">Takeaway Available</FormLabel>
                        </div>
                        <FormControl>
                          <Switch
                            checked={field.value ?? false}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <FormField
                control={step3Form.control}
                name="feedback_url"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Feedback URL (Optional)</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="https://example.com/feedback"
                        {...field}
                        value={field.value ?? ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={step3Form.control}
                name="review_url"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Review URL (Optional)</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="https://example.com/reviews"
                        {...field}
                        value={field.value ?? ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        );

      case 4:
        return (
          <Form {...step4Form} key="step-4">
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <h3 className="text-xl font-semibold">Financial Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <FormField
                  control={step4Form.control}
                  name="cgst"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>CGST (%)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g., 9"
                          value={field.value ?? ""}
                          onChange={(e) => {
                            const value = e.target.value.replace(/[^0-9.]/g, '');
                            field.onChange(value);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={step4Form.control}
                  name="sgst"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>SGST (%)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g., 9"
                          value={field.value ?? ""}
                          onChange={(e) => {
                            const value = e.target.value.replace(/[^0-9.]/g, '');
                            field.onChange(value);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={step4Form.control}
                  name="discount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Discount (%)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g., 5"
                          value={field.value ?? ""}
                          onChange={(e) => {
                            const value = e.target.value.replace(/[^0-9.]/g, '');
                            field.onChange(value);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="text-xs text-muted-foreground">
                <p>
                  Please ensure all tax information is accurate as per your business registration.
                  This information will be used for invoice generation and tax calculations.
                </p>
              </div>
            </form>
          </Form>
        );

      default:
        return null;
    }
  };

  return (
    <div className="h-screen flex items-center justify-center p-4 bg-gradient-to-br from-white via-zinc-100 to-zinc-300 overflow-hidden">
      <div className="bg-white w-full max-w-4xl rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row max-h-[90vh]">
        <div className="md:w-1/3 bg-blue-50 p-4 flex items-center justify-center">
          <Image
            src={bannerImg}
            alt="Onboarding Banner"
            width={250}
            height={250}
            className="max-w-full h-auto"
            priority
          />
        </div>
        <div className="md:w-2/3 p-4 py-0 md:p-6 overflow-y-auto">
          <Toaster richColors position="top-right" />
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">
              Start Your Free Trial
            </h2>
          </div>
          {renderStepIndicator()}
          <div>{renderForm()}</div>
          <div className="flex justify-between mt-4">
            {currentStep > 1 && (
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                disabled={isSubmitting}
                className="px-3 py-1 h-8"
              >
                Back
              </Button>
            )}
            {currentStep < totalSteps ? (
              <Button
                type="button"
                onClick={nextStep}
                disabled={isSubmitting}
                className={`px-3 py-1 h-8 cursor-pointer hover:opacity-90 ${currentStep > 1 ? "ml-auto" : ""}`}
              >
                Continue
              </Button>
            ) : (
              <Button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="ml-auto px-3 py-1 h-8 cursor-pointer hover:opacity-90"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-3 w-3 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Processing...
                  </>
                ) : (
                  "Start Free Trial"
                )}
              </Button>
            )}
          </div>
          <div className="mt-3 text-center text-xs text-muted-foreground">
            By continuing, you agree to our{" "}
            <a href="/TermsOfService" target="_blank" className="underline hover:text-primary">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/PrivacyPolicy" target="_blank" className="underline hover:text-primary">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Create a loading component
function LoadingState() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
    </div>
  );
}

// Export the wrapped component
export default function Page() {
  return (
    <Suspense fallback={<LoadingState />}>
      <OnboardingFormWrapper />
    </Suspense>
  );
}