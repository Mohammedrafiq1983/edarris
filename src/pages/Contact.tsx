import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  category: string;
  quantity: string;
  timeline: string;
  message: string;
}

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  
  const contactForm = useForm<ContactFormData>();
  const quoteForm = useForm<QuoteFormData>();
  
  const handleContactSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitMessage('Thank you for your message! We will get back to you soon.');
      contactForm.reset();
    } catch (error) {
      setSubmitMessage('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleQuoteSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitMessage('Thank you for your quote request! We will prepare a detailed quote and send it to you within 24 hours.');
      quoteForm.reset();
    } catch (error) {
      setSubmitMessage('There was an error submitting your quote request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const contactInfo = [
    {
      icon: MapPin,
      title: t('contact.info.address'),
      content: 'Baghdad, Iraq\nBusinesses District',
      color: 'text-blue-600',
    },
    {
      icon: Phone,
      title: t('contact.info.phone'),
      content: '+964 (0) 1234 5678\n+964 (0) 9876 5432',
      color: 'text-green-600',
    },
    {
      icon: Mail,
      title: t('contact.info.email'),
      content: 'info@edarris.com\nsales@edarris.com',
      color: 'text-purple-600',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Sun - Thu: 8:00 AM - 6:00 PM\nFri - Sat: 9:00 AM - 4:00 PM',
      color: 'text-orange-600',
    },
  ];
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            {t('contact.title')}
          </h1>
          <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">
                    {t('contact.info.title')}
                  </CardTitle>
                  <CardDescription>
                    Get in touch with our team for any inquiries or support
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className={`w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center ${info.color}`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">
                            {info.title}
                          </h4>
                          <p className="text-gray-600 text-sm whitespace-pre-line">
                            {info.content}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
              
              {/* Map Placeholder */}
              <Card className="mt-6">
                <CardContent className="p-0">
                  <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <MapPin className="w-12 h-12 mx-auto mb-2" />
                      <p>Interactive Map</p>
                      <p className="text-sm">Baghdad, Iraq</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Forms */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="contact" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="contact">General Contact</TabsTrigger>
                  <TabsTrigger value="quote">{t('quote.title')}</TabsTrigger>
                </TabsList>
                
                {/* Contact Form */}
                <TabsContent value="contact">
                  <Card>
                    <CardHeader>
                      <CardTitle>Send us a Message</CardTitle>
                      <CardDescription>
                        Fill out the form below and we'll get back to you as soon as possible.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={contactForm.handleSubmit(handleContactSubmit)} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="contact-name">{t('contact.form.name')}</Label>
                            <Input
                              id="contact-name"
                              {...contactForm.register('name', { required: true })}
                              placeholder="John Doe"
                            />
                          </div>
                          <div>
                            <Label htmlFor="contact-email">{t('contact.form.email')}</Label>
                            <Input
                              id="contact-email"
                              type="email"
                              {...contactForm.register('email', { required: true })}
                              placeholder="john@company.com"
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="contact-phone">{t('contact.form.phone')}</Label>
                            <Input
                              id="contact-phone"
                              {...contactForm.register('phone')}
                              placeholder="+964 1234 5678"
                            />
                          </div>
                          <div>
                            <Label htmlFor="contact-company">{t('contact.form.company')}</Label>
                            <Input
                              id="contact-company"
                              {...contactForm.register('company')}
                              placeholder="Company Name"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <Label htmlFor="contact-message">{t('contact.form.message')}</Label>
                          <Textarea
                            id="contact-message"
                            {...contactForm.register('message', { required: true })}
                            placeholder="Tell us about your requirements..."
                            rows={4}
                          />
                        </div>
                        
                        <Button type="submit" disabled={isSubmitting} className="w-full">
                          {isSubmitting ? (
                            t('common.loading')
                          ) : (
                            <>
                              <Send className="w-4 h-4 mr-2" />
                              {t('contact.form.submit')}
                            </>
                          )}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {/* Quote Form */}
                <TabsContent value="quote">
                  <Card>
                    <CardHeader>
                      <CardTitle>{t('quote.title')}</CardTitle>
                      <CardDescription>
                        Provide details about your requirements and we'll send you a competitive quote.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={quoteForm.handleSubmit(handleQuoteSubmit)} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="quote-name">{t('contact.form.name')}</Label>
                            <Input
                              id="quote-name"
                              {...quoteForm.register('name', { required: true })}
                              placeholder="John Doe"
                            />
                          </div>
                          <div>
                            <Label htmlFor="quote-email">{t('contact.form.email')}</Label>
                            <Input
                              id="quote-email"
                              type="email"
                              {...quoteForm.register('email', { required: true })}
                              placeholder="john@company.com"
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="quote-phone">{t('contact.form.phone')}</Label>
                            <Input
                              id="quote-phone"
                              {...quoteForm.register('phone')}
                              placeholder="+964 1234 5678"
                            />
                          </div>
                          <div>
                            <Label htmlFor="quote-company">{t('contact.form.company')}</Label>
                            <Input
                              id="quote-company"
                              {...quoteForm.register('company', { required: true })}
                              placeholder="Company Name"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <Label htmlFor="quote-category">{t('quote.category')}</Label>
                          <Select {...quoteForm.register('category', { required: true })}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="office">{t('products.office.title')}</SelectItem>
                              <SelectItem value="education">{t('products.education.title')}</SelectItem>
                              <SelectItem value="printshop">{t('products.printshop.title')}</SelectItem>
                              <SelectItem value="packaging">{t('products.packaging.title')}</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="quote-quantity">{t('quote.quantity')}</Label>
                            <Input
                              id="quote-quantity"
                              {...quoteForm.register('quantity')}
                              placeholder="e.g., 100 units"
                            />
                          </div>
                          <div>
                            <Label htmlFor="quote-timeline">{t('quote.timeline')}</Label>
                            <Select {...quoteForm.register('timeline')}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select timeline" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="immediate">Immediate (1-3 days)</SelectItem>
                                <SelectItem value="week">Within a week</SelectItem>
                                <SelectItem value="month">Within a month</SelectItem>
                                <SelectItem value="flexible">Flexible</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        
                        <div>
                          <Label htmlFor="quote-message">Additional Details</Label>
                          <Textarea
                            id="quote-message"
                            {...quoteForm.register('message')}
                            placeholder="Provide any additional details about your requirements..."
                            rows={4}
                          />
                        </div>
                        
                        <Button type="submit" disabled={isSubmitting} className="w-full">
                          {isSubmitting ? (
                            t('common.loading')
                          ) : (
                            <>
                              <Send className="w-4 h-4 mr-2" />
                              {t('quote.submit')}
                            </>
                          )}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
              
              {/* Success Message */}
              {submitMessage && (
                <Card className="mt-6 border-green-200 bg-green-50">
                  <CardContent className="pt-6">
                    <p className="text-green-800">{submitMessage}</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
