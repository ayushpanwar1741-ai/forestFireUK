import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 500);
  };

  const isFormValid = () => {
    return Object.values(formData).every((value) => value.trim() !== '');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600">
            Get in touch with the VanSuraksha team
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>
                  We're here to help and answer any questions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-forest-100 p-2 rounded-lg">
                    <Mail className="h-5 w-5 text-forest-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">Email</p>
                    <a
                      href="mailto:contact@vansuraksha.com"
                      className="text-sm text-gray-600 hover:text-forest-600"
                    >
                      contact@vansuraksha.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-forest-100 p-2 rounded-lg">
                    <Phone className="h-5 w-5 text-forest-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">Phone</p>
                    <a
                      href="tel:+911234567890"
                      className="text-sm text-gray-600 hover:text-forest-600"
                    >
                      +91 123 456 7890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-forest-100 p-2 rounded-lg">
                    <MapPin className="h-5 w-5 text-forest-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">Address</p>
                    <p className="text-sm text-gray-600">
                      Forest Research Institute<br />
                      Dehradun, Uttarakhand<br />
                      India - 248006
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Office Hours</CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-semibold">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-semibold">Closed</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-forest-600 to-forest-800 text-white border-0">
              <CardHeader>
                <CardTitle className="text-lg">Emergency Contact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-3 text-forest-100">
                  For urgent forest fire alerts and emergencies:
                </p>
                <a
                  href="tel:1800111000"
                  className="text-2xl font-bold hover:text-forest-100 transition-colors"
                >
                  1800-111-000
                </a>
                <p className="text-xs mt-2 text-forest-200">24/7 Emergency Hotline</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Your Name *
                      </label>
                      <Input
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <Input
                      type="text"
                      placeholder="How can we help you?"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                    />
                  </div>

                  {isSubmitted && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800">
                      <p className="font-semibold">Message sent successfully!</p>
                      <p className="text-sm">We'll get back to you within 24-48 hours.</p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={!isFormValid()}
                    className="w-full md:w-auto"
                    size="lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">How accurate are the predictions?</h4>
                  <p className="text-sm text-gray-600">
                    Our machine learning models achieve approximately 85-90% accuracy in
                    predicting forest fire risk levels, validated against historical data.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">What data sources do you use?</h4>
                  <p className="text-sm text-gray-600">
                    We integrate satellite imagery (MODIS, Landsat), meteorological data,
                    vegetation indices, and historical fire records from multiple trusted
                    sources.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Can I integrate this with my systems?</h4>
                  <p className="text-sm text-gray-600">
                    Yes! We provide RESTful APIs for integration with existing forest
                    management systems. Contact us for API documentation and access.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Is the system available for my region?</h4>
                  <p className="text-sm text-gray-600">
                    We currently monitor major forest regions in India. We're actively
                    expanding coverage. Contact us to discuss adding your region.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
