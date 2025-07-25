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
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Checkbox } from "@radix-ui/react-checkbox";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";


const ShopOnboarding = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "SUPERADMIN",
    gst_number: "",
    accept_online_orders: true,
    accept_online_payments: true,
    delivery_available: true,
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
  });

  const [isDetectingLocation, setIsDetectingLocation] = useState(false);
  const [locationDetected, setLocationDetected] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    const checked = e.target.checked;

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
        name: formData.name, // Include name in location as per API structure
      },
    };

    try {
      const response = await fetch((process.env.NEXT_PUBLIC_API_BASE_URL_KARTIQ||"https://kartiq-v1.xoup.co.in")+"/api/v1/ascendra/shop", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setSubmitStatus({
        type: "success",
        message: "Account created successfully! Welcome to our platform.",
      });
      console.log("API Response:", result);
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
      formData.email &&
      formData.phone &&
      formData.password &&
      formData.location.street &&
      formData.location.city &&
      formData.location.state &&
      formData.location.pincode
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mb-4">
            <Store  className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Welcome to Our Platform
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of successful businesses and start growing your shop
            today
          </p>
        </div>

        <div className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Basic Information */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <User className="w-5 h-5 text-blue-600" />
                  </div>
                  Basic Information
                </CardTitle>
                <CardDescription>
                  Tell us about your business and create your account
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Business Name *</Label>
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
                    placeholder="+1 (555) 123-4567"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password *</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Create a secure password"
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
                </div>
              </CardContent>
            </Card>

            {/* Business Settings */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Settings className="w-5 h-5 text-green-600" />
                  </div>
                  Business Settings
                </CardTitle>
                <CardDescription>
                  Configure your business operations and preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="role">Account Type</Label>
                  <Select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                  >
                    <option value="MERCHANT">Merchant</option>
                    <option value="ADMIN">Admin</option>
                    <option value="SUPERADMIN">Super Admin</option>
                  </Select>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Checkbox
                      id="accept_online_orders"
                      name="accept_online_orders"
                      checked={formData.accept_online_orders}
                      onChange={handleInputChange}
                    />
                    <Label
                      htmlFor="accept_online_orders"
                      className="flex-1 cursor-pointer"
                    >
                      Accept Online Orders
                      <div className="text-xs text-gray-500 font-normal">
                        Allow customers to place orders through your online store
                      </div>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Checkbox
                      id="accept_online_payments"
                      name="accept_online_payments"
                      checked={formData.accept_online_payments}
                      onChange={handleInputChange}
                    />
                    <Label
                      htmlFor="accept_online_payments"
                      className="flex-1 cursor-pointer"
                    >
                      Accept Online Payments
                      <div className="text-xs text-gray-500 font-normal">
                        Enable secure online payment processing
                      </div>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Checkbox
                      id="delivery_available"
                      name="delivery_available"
                      checked={formData.delivery_available}
                      onChange={handleInputChange}
                    />
                    <Label
                      htmlFor="delivery_available"
                      className="flex-1 cursor-pointer"
                    >
                      Delivery Available
                      <div className="text-xs text-gray-500 font-normal">
                        Offer delivery services to customers
                      </div>
                    </Label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Location Information */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
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
                          Latitude: {formData.location.coordinates[1].toFixed(6)},
                          Longitude: {formData.location.coordinates[0].toFixed(6)}
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
                  <Select
                    id="location.tag"
                    name="location.tag"
                    value={formData.location.tag}
                    onChange={handleInputChange}
                  >
                    <option value="home">Home</option>
                    <option value="office">Office</option>
                    <option value="shop">Shop</option>
                    <option value="warehouse">Warehouse</option>
                  </Select>
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

          {submitStatus && (
            <Alert variant={submitStatus.type === "error" ? "destructive" : "success"}>
              {submitStatus.type === "error" ? (
                <AlertCircle className="h-4 w-4" />
              ) : (
                <CheckCircle2 className="h-4 w-4" />
              )}
              <AlertDescription>{submitStatus.message}</AlertDescription>
            </Alert>
          )}

          <div className="flex justify-center pt-6">
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting || !isFormValid()}
              size="lg"
              className="w-full max-w-md bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
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

        <div className="text-center mt-8 text-sm text-gray-500">
          By registering, you agree to our Terms of Service and Privacy Policy
        </div>
      </div>
    </div>
  );
};

export default ShopOnboarding;