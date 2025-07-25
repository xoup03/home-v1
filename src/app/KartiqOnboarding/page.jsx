"use client";
import React, { useState } from "react";
import {
  MapPin,
  User,
  Settings,
  Store,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Eye,
  EyeOff,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox"; // Use your UI checkbox
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import SuccessModal from "./SuccessModal";
import xoupLogo from "@/assets/Xouplogo.png";
import xouphero from "@/assets/xouphero.svg";
import OnboardingSVG from "@/assets/Onboarding.svg";
import Image from "next/image";

const ShopOnboarding = () => {
  const [formData, setFormData] = useState({
    name: "",
    shop_name: "",
    email: "",
    phone: "",
    password: "",
    role: "SUPERADMIN",
    gst_number: "",
    accept_online_orders: false,
    accept_online_payments: false,
    delivery_available: false,
    location: {
      street: "",
      city: "",
      state: "",
      pincode: "",
      locality: "",
      location_url: "",
      coordinates: null,
      tag: "shop",
    },
    alert_phone_number: [],
  });

  const [alertPhoneInput, setAlertPhoneInput] = useState(""); // Add this state
  const [isDetectingLocation, setIsDetectingLocation] = useState(false);
  const [locationDetected, setLocationDetected] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const phoneRegex = /^[6-9]\d{9}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;

  const [errors, setErrors] = useState({
    phone: "",
    email: "",
    gst_number: "",
    alert_phone: "",
    confirm_password: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    const checked = e.target.checked;

    // Validation
    if (name === "phone") {
      setErrors((prev) => ({
        ...prev,
        phone: phoneRegex.test(value)
          ? ""
          : "Enter a valid 10-digit phone number.",
      }));
    }
    if (name === "email") {
      setErrors((prev) => ({
        ...prev,
        email: emailRegex.test(value) ? "" : "Enter a valid email address.",
      }));
    }
    if (name === "gst_number") {
      setErrors((prev) => ({
        ...prev,
        gst_number:
          value && !gstRegex.test(value) ? "Enter a valid GSTIN." : "",
      }));
    }
    if (name === "confirm_password") {
      setConfirmPassword(value);
      setErrors((prev) => ({
        ...prev,
        confirm_password:
          value !== formData.password ? "Passwords do not match." : "",
      }));
      return;
    }

    if (name.startsWith("location.")) {
      const locationField = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        location: {
          ...prev.location,
          [locationField]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const detectLocation = () => {
    if (!navigator.geolocation) {
      setSubmitStatus({
        type: "error",
        message: "Geolocation is not supported by this browser.",
      });
      return;
    }

    setIsDetectingLocation(true);
    setSubmitStatus(null);

    const handleSuccess = (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      setFormData((prev) => ({
        ...prev,
        location: {
          ...prev.location,
          coordinates: [lng, lat],
        },
      }));

      setLocationDetected(true);
      setIsDetectingLocation(false);
      setSubmitStatus({
        type: "success",
        message: `Location detected: ${lat.toFixed(6)}, ${lng.toFixed(6)}`,
      });

      setTimeout(() => setSubmitStatus(null), 5000);
    };

    const handleError = (error) => {
      let errorMessage = "Unable to detect location. ";
      switch (error.code) {
        case error.PERMISSION_DENIED:
          errorMessage += "Location access denied by user.";
          break;
        case error.POSITION_UNAVAILABLE:
          errorMessage += "Location information unavailable.";
          break;
        case error.TIMEOUT:
          errorMessage += "Location request timed out.";
          break;
        default:
          errorMessage += "An unknown error occurred.";
      }
      setSubmitStatus({ type: "error", message: errorMessage });
      setIsDetectingLocation(false);
    };

    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    const submissionData = {
      ...formData,
      location: {
        ...formData.location,
        name: formData.name,
      },
    };

    try {
      const response = await fetch(
        (process.env.NEXT_PUBLIC_API_BASE_URL_KARTIQ ||
          "https://kartiq-v1.xoup.co.in") + "/api/v1/ascendra/shop",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submissionData),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setShowSuccessModal(true); // Show modal
      // Reset form
      setFormData({
        name: "",
        shop_name: "",
        email: "",
        phone: "",
        password: "",
        role: "SUPERADMIN",
        gst_number: "",
        accept_online_orders: false,
        accept_online_payments: false,
        delivery_available: false,
        location: {
          street: "",
          city: "",
          state: "",
          pincode: "",
          locality: "",
          location_url: "",
          coordinates: null,
          tag: "shop",
        },
        alert_phone_number: [],
      });
      setConfirmPassword("");
      setAlertPhoneInput("");
      setLocationDetected(false);
      setShowPassword(false);
      setShowConfirmPassword(false);
      setErrors({
        phone: "",
        email: "",
        gst_number: "",
        alert_phone: "",
        confirm_password: "",
      });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: `Something went wrong: ${error.message}. Please try again.`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = () => {
    return !!(
      formData.name &&
      formData.shop_name &&
      formData.email &&
      formData.phone &&
      formData.password &&
      confirmPassword &&
      formData.password === confirmPassword &&
      formData.location.street &&
      formData.location.city &&
      formData.location.state &&
      formData.location.pincode &&
      !errors.phone &&
      !errors.email &&
      !errors.gst_number &&
      !errors.confirm_password
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 py-0 px-0 relative overflow-x-hidden">
      {/* Decorative SVG background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={OnboardingSVG}
          alt="Decorative background"
          width={1200}
          height={400}
          className="w-full opacity-10 select-none"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center pt-10 pb-4">
          <Image
            src={xouphero}
            alt="Onboarding Hero"
            width={320}
            height={120}
            className="mb-2 drop-shadow-xl animate-fade-in"
            priority
          />
          <Image
            src={xoupLogo}
            alt="Xoup Logo"
            width={180}
            height={180}
            className="mb-2"
            priority
          />
          <p className="text-lg text-gray-600 max-w-xl text-center mb-2 -mt-10">
            Join Xoup and start growing your shop with our powerful tools and
            features.
            <br />
            Let's get you set up!
          </p>
        </div>

        <div className="space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Basic Information */}
            <Card className="rounded-2xl shadow-2xl border-0 bg-white/90 animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <User className="w-5 h-5 text-blue-600" />
                  </div>
                  Basic Information
                </CardTitle>
                <CardDescription>
                  Tell us about yourself and create your account
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Personal Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your business name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="business@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="9876543210"
                    required
                  />
                  {errors.phone && (
                    <div className="text-xs text-red-500 mt-1">
                      {errors.phone}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password *</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Create a secure password"
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-2 top-2 text-gray-500"
                      onClick={() => setShowPassword((v) => !v)}
                      tabIndex={-1}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirm_password">Confirm Password *</Label>
                  <div className="relative">
                    <Input
                      id="confirm_password"
                      name="confirm_password"
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Re-enter your password"
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-2 top-2 text-gray-500"
                      onClick={() => setShowConfirmPassword((v) => !v)}
                      tabIndex={-1}
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </div>
                  {errors.confirm_password && (
                    <div className="text-xs text-red-500 mt-1">
                      {errors.confirm_password}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Business Settings */}
            <Card className="rounded-2xl shadow-2xl border-0 bg-white/90 animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Settings className="w-5 h-5 text-green-600" />
                  </div>
                  Business Information
                </CardTitle>
                <CardDescription>
                  Tell us about your business and how you want to operate
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Business Name *</Label>
                  <Input
                    id="shop_name"
                    name="shop_name"
                    value={formData.shop_name}
                    onChange={handleInputChange}
                    placeholder="Enter your business name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="gst_number">GST Number</Label>
                  <Input
                    id="gst_number"
                    name="gst_number"
                    value={formData.gst_number}
                    onChange={handleInputChange}
                    placeholder="22AAAAA0000A1Z5"
                  />
                  {errors.gst_number && (
                    <div className="text-xs text-red-500 mt-1">
                      {errors.gst_number}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="alert_phone_number">
                    Phone numbers to receive alerts *
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      id="alert_phone_number"
                      name="alert_phone_number"
                      value={alertPhoneInput}
                      onChange={(e) => {
                        const value = e.target.value;
                        setAlertPhoneInput(value);
                        setErrors((prev) => ({
                          ...prev,
                          alert_phone:
                            value.trim() === "" || phoneRegex.test(value.trim())
                              ? ""
                              : "Enter a valid 10-digit phone number.",
                        }));
                      }}
                      placeholder="Enter phone number"
                    />
                    <Button
                      type="button"
                      onClick={() => {
                        if (!phoneRegex.test(alertPhoneInput.trim())) {
                          setErrors((prev) => ({
                            ...prev,
                            alert_phone: "Enter a valid 10-digit phone number.",
                          }));
                          return;
                        }
                        if (
                          formData.alert_phone_number.includes(
                            alertPhoneInput.trim()
                          )
                        ) {
                          setErrors((prev) => ({
                            ...prev,
                            alert_phone: "Phone number already added.",
                          }));
                          return;
                        }
                        setFormData((prev) => ({
                          ...prev,
                          alert_phone_number: [
                            ...prev.alert_phone_number,
                            alertPhoneInput.trim(),
                          ],
                        }));
                        setAlertPhoneInput("");
                        setErrors((prev) => ({ ...prev, alert_phone: "" }));
                      }}
                      disabled={!alertPhoneInput.trim() || !!errors.alert_phone}
                    >
                      Add
                    </Button>
                  </div>
                  <div className="text-xs text-gray-500">
                    Add multiple phone numbers for alerts.
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {formData.alert_phone_number.map((num, idx) => (
                      <div
                        key={idx}
                        className="flex items-center bg-gray-100 px-2 py-1 rounded"
                      >
                        <span className="mr-2">{num}</span>
                        <Button
                          type="button"
                          size="sm"
                          variant="ghost"
                          onClick={() => {
                            setFormData((prev) => ({
                              ...prev,
                              alert_phone_number:
                                prev.alert_phone_number.filter(
                                  (_, i) => i !== idx
                                ),
                            }));
                          }}
                        >
                          Remove
                        </Button>
                      </div>
                    ))}
                  </div>
                  {errors.alert_phone && (
                    <div className="text-xs text-red-500 mt-1">
                      {errors.alert_phone}
                    </div>
                  )}
                </div>

                {/* <div className="space-y-2">
                  <div className="flex items-center space-x-3 py-1 bg-gray-50 rounded-lg">
                    <Checkbox
                      id="accept_online_orders"
                      checked={formData.accept_online_orders}
                      disabled={true}
                      onCheckedChange={(checked) =>
                        handleInputChange({
                          target: { name: "accept_online_orders", type: "checkbox", checked },
                        })
                      }
                    />
                    <Label htmlFor="accept_online_orders" className="flex-1 cursor-pointer">
                      Accept Online Orders (Disabled at the moment)
                      <div className="text-xs text-gray-500 font-normal">
                        Allow customers to place orders through your online store
                      </div>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-3 py-1 bg-gray-50 rounded-lg">
                    <Checkbox
                      id="accept_online_payments"
                      checked={formData.accept_online_payments}
                      disabled={true}
                      onCheckedChange={(checked) =>
                        handleInputChange({
                          target: { name: "accept_online_payments", type: "checkbox", checked },
                        })
                      }
                    />
                    <Label htmlFor="accept_online_payments" className="flex-1 cursor-pointer">
                      Accept Online Payments (Disabled at the moment)
                      <div className="text-xs text-gray-500 font-normal">
                        Enable secure online payment processing
                      </div>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-3 py-1 bg-gray-50 rounded-lg">
                    <Checkbox
                      id="delivery_available"
                      checked={formData.delivery_available}
                      disabled={true}
                      onCheckedChange={(checked) =>
                        handleInputChange({
                          target: { name: "delivery_available", type: "checkbox", checked },
                        })
                      }
                    />
                    <Label htmlFor="delivery_available" className="flex-1 cursor-pointer">
                      Delivery Available (Disabled at the moment)
                      <div className="text-xs text-gray-500 font-normal">
                        Offer delivery services to customers
                      </div>
                    </Label>
                  </div>
                </div> */}
              </CardContent>
            </Card>
          </div>

          {/* Divider */}
          <div className="flex items-center my-8">
            <div className="flex-1 h-px bg-gradient-to-r from-blue-300 via-purple-300 to-indigo-300" />
            <span className="mx-4 text-gray-400 font-semibold">Location Details</span>
            <div className="flex-1 h-px bg-gradient-to-r from-indigo-300 via-purple-300 to-blue-300" />
          </div>

          {/* Location Information */}
          <Card className="rounded-2xl shadow-2xl border-0 bg-white/90 animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <MapPin className="w-5 h-5 text-purple-600" />
                </div>
                Location Information
              </CardTitle>
              <CardDescription>
                Help customers find your business with accurate location details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900">
                      Quick Location Setup
                    </h4>
                    <p className="text-sm text-gray-600">
                      Automatically detect your current location for accurate
                      coordinates
                    </p>
                  </div>
                  <Button
                    onClick={detectLocation}
                    disabled={isDetectingLocation}
                    variant={locationDetected ? "secondary" : "default"}
                    className="shrink-0"
                  >
                    {isDetectingLocation ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Detecting...
                      </>
                    ) : locationDetected ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 mr-2" />
                        Location Detected
                      </>
                    ) : (
                      <>
                        <MapPin className="w-4 h-4 mr-2" />
                        Detect Location
                      </>
                    )}
                  </Button>
                </div>

                {formData.location.coordinates && (
                  <div className="mt-4 p-3 bg-white rounded border-l-4 border-green-400">
                    <div className="flex">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          Coordinates Detected
                        </p>
                        <p className="text-sm text-gray-600">
                          Latitude:{" "}
                          {formData.location.coordinates[1].toFixed(6)},
                          Longitude:{" "}
                          {formData.location.coordinates[0].toFixed(6)}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="location.street">Street Address *</Label>
                  <Input
                    id="location.street"
                    name="location.street"
                    value={formData.location.street}
                    onChange={handleInputChange}
                    placeholder="123 Main Street"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location.city">City *</Label>
                  <Input
                    id="location.city"
                    name="location.city"
                    value={formData.location.city}
                    onChange={handleInputChange}
                    placeholder="New York"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location.state">State *</Label>
                  <Input
                    id="location.state"
                    name="location.state"
                    value={formData.location.state}
                    onChange={handleInputChange}
                    placeholder="NY"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location.pincode">PIN Code *</Label>
                  <Input
                    id="location.pincode"
                    name="location.pincode"
                    value={formData.location.pincode}
                    onChange={handleInputChange}
                    placeholder="10001"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location.locality">Locality</Label>
                  <Input
                    id="location.locality"
                    name="location.locality"
                    value={formData.location.locality}
                    onChange={handleInputChange}
                    placeholder="Downtown, Business District"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location.tag">Location Tag</Label>
                  <div className="flex gap-4">
                    {["home", "office", "shop", "warehouse"].map((tag) => (
                      <label
                        key={tag}
                        className="flex items-center gap-1 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="location.tag"
                          value={tag}
                          checked={formData.location.tag === tag}
                          onChange={handleInputChange}
                          className="accent-blue-600"
                        />
                        <span className="capitalize">{tag}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="location.location_url">
                    Location URL (Google Maps, etc.)
                  </Label>
                  <Input
                    id="location.location_url"
                    name="location.location_url"
                    type="url"
                    value={formData.location.location_url}
                    onChange={handleInputChange}
                    placeholder="https://maps.google.com/?q=..."
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Submit Status */}
          {submitStatus && (
            <Alert
              variant={submitStatus.type === "error" ? "destructive" : "success"}
              className="mt-8"
            >
              {submitStatus.type === "error" ? (
                <AlertCircle className="h-4 w-4" />
              ) : (
                <CheckCircle2 className="h-4 w-4" />
              )}
              <AlertDescription>{submitStatus.message}</AlertDescription>
            </Alert>
          )}

          {/* Submit Button */}
          <div className="flex justify-center pt-8">
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting || !isFormValid()}
              size="lg"
              className="w-full max-w-md bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold shadow-lg rounded-xl transition-all duration-200"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Creating Account...
                </>
              ) : (
                <>Complete Registration</>
              )}
            </Button>
          </div>
        </div>

        <div className="text-center mt-12 text-sm text-gray-500">
          By registering, you agree to our Terms of Service and Privacy Policy
        </div>
      </div>
      <SuccessModal
        open={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
      />
      <style>{`
      @keyframes fade-in {
        from { opacity: 0; transform: translateY(20px);}
        to { opacity: 1; transform: translateY(0);}
      }
      .animate-fade-in { animation: fade-in 0.7s; }
    `}</style>
    </div>
  );
};

export default ShopOnboarding;
