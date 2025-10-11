"use client";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import {
  Menu,
  X,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Facebook,
} from "lucide-react";
import image from "../../public/image.png";
import image1 from "../../public/image1.png";
import image2 from "../../public/image2.png";
import image7 from "../../public/image7.png";
import Image from "next/image";
import image6 from "../../public/image6.png";
import image5 from "../../public/image5.png";
// import image6 from "../../public/image6.png";
import logo from "../../public/logo.png";

export default function ANMExports() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  // Inside your component
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Create WhatsApp message
    let whatsappMessage = `Hello ANM Exports!\n\n`;
    whatsappMessage += `*Name:* ${formData.name}\n`;
    whatsappMessage += `*Email:* ${formData.email}\n`;
    if (formData.company.trim()) {
      whatsappMessage += `*Company:* ${formData.company}\n`;
    }
    whatsappMessage += `\n*Message:*\n${formData.message}`;

    // Generate WhatsApp link and open in new tab
    const whatsappLink = createWhatsAppLink("+918130065487", whatsappMessage);
    window.open(whatsappLink, "_blank");

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
    });
    setErrors({});
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = [
        "home",
        "about",
        "craftsmanship",
        "products",
        "why-us",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const getImage = useCallback((index) => {
    switch (index) {
      case 0:
        return image;
      case 1:
        return image1;
      case 2:
        return image2;
      case 3:
        return image6;
      case 4:
        return image7;
      case 5:
        return image5;
      // case 6:
      // return image6;
      default:
        return image;
    }
  }, []);

  const handleInstagramRedirection = useCallback(() => {
    if (window) {
      window.open("https://www.instagram.com/anm_exports", "_blank");
    }
  }, []);

  // Email link generator
  const createEmailLink = (email, subject, body) => {
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body).replace(/%20/g, "%20");
    return `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;
  };

  // WhatsApp link generator
  const createWhatsAppLink = (phoneNumber, message) => {
    const cleanNumber = phoneNumber.replace(/[^0-9]/g, "");
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
  };

  const products = [
    {
      name: "Handcrafted Lampshades",
      desc: "Elegant designs in jute, linen & cotton",
    },
    {
      name: "Exquisite Chandeliers",
      desc: "Statement pieces for luxury spaces",
    },
    {
      name: "Beith Foldable Chandeliers",
      desc: "Innovative, space-saving elegance",
    },
    { name: "Custom Lighting", desc: "Bespoke solutions for unique visions" },
    { name: "Pendant Lights", desc: "Contemporary hanging artistry" },
    { name: "Wall Sconces", desc: "Sophisticated wall-mounted illumination" },
  ];

  const features = [
    {
      title: "Artisan Craftsmanship",
      desc: "Every piece handcrafted by skilled Indian artisans with decades of heritage",
    },
    {
      title: "Sustainable Materials",
      desc: "Eco-friendly jute, linen, and cotton sourced responsibly",
    },
    {
      title: "Custom Solutions",
      desc: "Tailored designs to match your unique vision and space requirements",
    },
    {
      title: "Global Standards",
      desc: "Quality that meets international retail and hospitality expectations",
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      {/* Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              {/* <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">ANM</span>
              </div> */}
              <Image
                src={logo}
                alt="ANM Exports Logo"
                className="w-16 h-16 object-contain"
                width={48}
                height={48}
              />
              <div>
                <h1 className="text-xl font-bold text-stone-900">
                  ANM Exports
                </h1>
                <p className="text-xs text-stone-600">Handcrafted Lighting</p>
              </div>
            </div>

            <div className="hidden md:flex space-x-8">
              {[
                "home",
                "about",
                "craftsmanship",
                "products",
                "why-us",
                "contact",
              ].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section
                      ? "text-amber-700 font-semibold"
                      : "text-stone-700 hover:text-amber-700"
                  }`}
                >
                  {section === "why-us" ? "Why Us" : section}
                </button>
              ))}
            </div>

            <button
              onClick={() => scrollToSection("contact")}
              className="hidden md:block bg-amber-700 text-white px-6 py-2 rounded-lg hover:bg-amber-800 transition-colors"
            >
              Get in Touch
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-stone-900"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              {[
                "home",
                "about",
                "craftsmanship",
                "products",
                "why-us",
                "contact",
              ].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-2 capitalize text-stone-700 hover:text-amber-700"
                >
                  {section === "why-us" ? "Why Us" : section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-stone-100 to-amber-100 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-600 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-stone-900 mb-6 leading-tight">
            Illuminating Elegance,
            <br />
            <span className="text-amber-700">Globally</span>
          </h1>
          <p className="text-xl sm:text-2xl text-stone-700 mb-12 max-w-3xl mx-auto">
            Handcrafted lighting that transforms spaces into works of art. From
            India's heritage to the world's finest interiors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("products")}
              className="bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-800 transition-all transform hover:scale-105 flex items-center justify-center"
            >
              Explore Collection <ChevronRight className="ml-2" />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="border-2 border-amber-700 text-amber-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-700 hover:text-white transition-all"
            >
              Partner With Us
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 mb-6">
                About Us
              </h2>
              <div className="space-y-6 text-lg text-stone-700 leading-relaxed">
                <p>
                  Founded in 2017, ANM Exports stands as a distinguished name in
                  the world of handcrafted lighting — creating luxurious
                  lampshades, exquisite chandeliers, and innovative foldable
                  "Beith" chandeliers that embody timeless elegance and modern
                  design.
                </p>
                <p>
                  Every piece we create is a celebration of artistry, precision,
                  and sustainability. Our skilled artisans transform natural
                  materials such as jute, linen, and cotton into luminous works
                  of art that reflect India's heritage while resonating with
                  contemporary global aesthetics.
                </p>
                <p>
                  With a reputation built on craftsmanship, quality, and
                  authenticity, ANM Exports proudly partners with international
                  retailers, design studios, and hospitality brands seeking
                  refined, customizable lighting solutions.
                </p>
                <p className="font-semibold text-amber-700 text-xl italic">
                  "Illuminating Elegance, Globally" — we continue to shape
                  spaces that exude warmth, sophistication, and soul, one
                  handcrafted light at a time.
                </p>
              </div>
            </div>
            <div className="relative">
              {/* <div className="aspect-square bg-gradient-to-br from-amber-200 to-amber-400 rounded-2xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-amber-800 text-6xl font-bold opacity-20">
                  ANM
                </div>
              </div> */}
              <Image
                src={logo}
                alt="About ANM Exports"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-2xl">
                <p className="text-4xl font-bold text-amber-700">2017</p>
                <p className="text-stone-600">Since</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section id="craftsmanship" className="py-24 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 mb-4">
              Our Craftsmanship
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Where heritage meets innovation. Every piece tells a story of
              dedication, skill, and sustainable artistry.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🪡</span>
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-4">
                Artisan Techniques
              </h3>
              <p className="text-stone-600 leading-relaxed">
                Traditional Indian weaving and assembly methods passed down
                through generations, ensuring authenticity in every stitch.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🌿</span>
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-4">
                Natural Materials
              </h3>
              <p className="text-stone-600 leading-relaxed">
                Premium jute, linen, and cotton sourced sustainably, creating
                eco-friendly lighting that's as responsible as it is beautiful.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-4">
                Modern Design
              </h3>
              <p className="text-stone-600 leading-relaxed">
                Contemporary aesthetics blended with traditional craft, creating
                pieces that elevate any modern interior space.
              </p>
            </div>
          </div>

          {/* <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-video bg-gradient-to-br from-amber-300 to-amber-500 rounded-xl overflow-hidden flex items-center justify-center">
              <p className="text-white text-2xl font-semibold opacity-50">Craftsmanship Image 1</p>
            </div>
            <div className="aspect-video bg-gradient-to-br from-stone-300 to-stone-500 rounded-xl overflow-hidden flex items-center justify-center">
              <p className="text-white text-2xl font-semibold opacity-50">Craftsmanship Image 2</p>
            </div>
          </div> */}
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 mb-4">
              Our Collections
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Discover our range of handcrafted lighting solutions, each
              designed to transform spaces into extraordinary experiences.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="aspect-square bg-gradient-to-br from-amber-100 to-stone-200 rounded-2xl overflow-hidden mb-4 relative">
                  {/* <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-stone-400 text-lg font-semibold">Product Image {idx + 1}</p>
                  </div> */}
                  <Image
                    src={getImage(idx)}
                    alt={product.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-amber-700 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-stone-600">{product.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        id="why-us"
        className="py-24 bg-gradient-to-br from-amber-50 to-stone-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 mb-4">
              Why Choose ANM Exports
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Partner with a name trusted by international retailers, design
              studios, and hospitality brands worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-2xl font-bold">
                      {idx + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-stone-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-stone-600 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white p-12 rounded-2xl shadow-xl text-center">
            <h3 className="text-3xl font-bold text-stone-900 mb-4">
              Trusted by Leading Brands Worldwide
            </h3>
            <p className="text-stone-600 text-lg mb-8">
              International retailers, luxury hotels, and design studios choose
              ANM Exports for authentic, customizable lighting solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-6 py-2 bg-stone-100 rounded-full text-stone-700">
                International Retail
              </span>
              <span className="px-6 py-2 bg-stone-100 rounded-full text-stone-700">
                Design Studios
              </span>
              <span className="px-6 py-2 bg-stone-100 rounded-full text-stone-700">
                Hospitality
              </span>
              <span className="px-6 py-2 bg-stone-100 rounded-full text-stone-700">
                Custom Projects
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Let's Illuminate Together
              </h2>
              <p className="text-xl text-stone-300 mb-12">
                Ready to bring handcrafted elegance to your project? We'd love
                to discuss how ANM Exports can partner with you.
              </p>

              <div className="space-y-6">
                {/* Email Section */}
                <div className="flex items-start space-x-4">
                  <Mail
                    className="text-amber-400 flex-shrink-0 mt-1"
                    size={24}
                  />
                  <div>
                    <p className="font-semibold text-lg">Email Us</p>
                    <div className="space-y-1">
                      <a
                        href={createEmailLink(
                          "info@anmexports.com",
                          "Partnership Inquiry - ANM Exports",
                          "Hello ANM Exports Team,\n\nI am interested in learning more about your handcrafted lighting solutions.\n\nCompany Name: \nProject Details: \n\nThank you!"
                        )}
                        className="block text-stone-300 hover:text-amber-400 transition-colors cursor-pointer"
                      >
                        info@anmexports.com
                      </a>
                      <a
                        href={createEmailLink(
                          "Manjot@anmexports.in",
                          "Partnership Inquiry - ANM Exports",
                          "Hello ANM Exports Team,\n\nI am interested in learning more about your handcrafted lighting solutions.\n\nCompany Name: \nProject Details: \n\nThank you!"
                        )}
                        className="block text-stone-300 hover:text-amber-400 transition-colors cursor-pointer"
                      >
                        Manjot@anmexports.in
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Section */}
                <div className="flex items-start space-x-4">
                  <Phone
                    className="text-amber-400 flex-shrink-0 mt-1"
                    size={24}
                  />
                  <div>
                    <p className="font-semibold text-lg">WhatsApp Us</p>
                    <div className="space-y-1">
                      <a
                        href={createWhatsAppLink(
                          "+918130065487",
                          "Hi ANM Exports! I'm interested in your handcrafted lighting solutions. I'd like to discuss a potential partnership."
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-stone-300 hover:text-amber-400 transition-colors cursor-pointer"
                      >
                        +91 8130065487
                      </a>
                      <a
                        href={createWhatsAppLink(
                          "+917668783303",
                          "Hi ANM Exports! I'm interested in your handcrafted lighting solutions. I'd like to discuss a potential partnership."
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-stone-300 hover:text-amber-400 transition-colors cursor-pointer"
                      >
                        +91 7668783303
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin
                    className="text-amber-400 flex-shrink-0 mt-1"
                    size={24}
                  />
                  <div>
                    <p className="font-semibold text-lg">Visit Us</p>
                    <p className="text-stone-300">
                      C 212 Sector 63 noida, uttar pradesh 201301 India
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <p className="text-stone-400 mb-4">Follow Our Journey</p>
                <div className="flex space-x-4">
                  <button
                    onClick={handleInstagramRedirection}
                    className="group bg-stone-800 cursor-pointer rounded-full flex items-center justify-center transition-colors hover:bg-stone-700"
                  >
                    <div className="flex items-center gap-2 px-4 py-2">
                      <div className="h-12 w-12 rounded-full group-hover:bg-amber-700 flex items-center justify-center transition-colors">
                        <Instagram size={20} className="w-6 h-6" />
                      </div>
                      <span className="text-sm">Instagram</span>
                    </div>
                  </button>
                  {/* <button className="w-12 h-12 bg-stone-800 hover:bg-amber-700 rounded-full flex items-center justify-center transition-colors">
                    <Linkedin size={20} />
                  </button>
                  <button className="w-12 h-12 bg-stone-800 hover:bg-amber-700 rounded-full flex items-center justify-center transition-colors">
                    <Facebook size={20} />
                  </button> */}
                </div>
              </div>
            </div>

            <div className="bg-stone-800 p-8 rounded-2xl">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-stone-900 border border-stone-700 rounded-lg focus:outline-none focus:border-amber-500 text-white"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-stone-900 border border-stone-700 rounded-lg focus:outline-none focus:border-amber-500 text-white"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Company{" "}
                    <span className="text-stone-500 text-xs">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-stone-900 border border-stone-700 rounded-lg focus:outline-none focus:border-amber-500 text-white"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 bg-stone-900 border border-stone-700 rounded-lg focus:outline-none focus:border-amber-500 text-white resize-none"
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-amber-700 text-white py-4 rounded-lg font-semibold hover:bg-amber-600 transition-colors"
                >
                  Send via WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-stone-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">ANM</span>
                </div>
                <span className="text-white font-bold">ANM Exports</span>
              </div>
              <p className="text-sm">Handcrafted lighting since 2017</p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button
                  onClick={() => scrollToSection("about")}
                  className="block hover:text-amber-400 transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("products")}
                  className="block hover:text-amber-400 transition-colors"
                >
                  Products
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block hover:text-amber-400 transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Collections</h4>
              <div className="space-y-2 text-sm">
                <p>Lampshades</p>
                <p>Chandeliers</p>
                <p>Beith Collection</p>
                <p>Custom Solutions</p>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm">
                <div className="space-y-6">
                  {/* Email Section */}
                  <div className="flex items-start space-x-4">
                    <Mail
                      className="text-amber-400 flex-shrink-0 mt-1"
                      size={24}
                    />
                    <div>
                      <p className="font-semibold text-lg">Email Us</p>
                      <div className="space-y-1">
                        <a
                          href={createEmailLink(
                            "info@anmexports.com",
                            "Partnership Inquiry - ANM Exports",
                            "Hello ANM Exports Team,\n\nI am interested in learning more about your handcrafted lighting solutions.\n\nCompany Name: \nProject Details: \n\nThank you!"
                          )}
                          className="block text-stone-300 hover:text-amber-400 transition-colors cursor-pointer"
                        >
                          info@anmexports.com
                        </a>
                        <a
                          href={createEmailLink(
                            "Manjot@anmexports.in",
                            "Partnership Inquiry - ANM Exports",
                            "Hello ANM Exports Team,\n\nI am interested in learning more about your handcrafted lighting solutions.\n\nCompany Name: \nProject Details: \n\nThank you!"
                          )}
                          className="block text-stone-300 hover:text-amber-400 transition-colors cursor-pointer"
                        >
                          Manjot@anmexports.in
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Section */}
                  <div className="flex items-start space-x-4">
                    <Phone
                      className="text-amber-400 flex-shrink-0 mt-1"
                      size={24}
                    />
                    <div>
                      <p className="font-semibold text-lg">WhatsApp Us</p>
                      <div className="space-y-1">
                        <a
                          href={createWhatsAppLink(
                            "+918130065487",
                            "Hi ANM Exports! I'm interested in your handcrafted lighting solutions. I'd like to discuss a potential partnership."
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-stone-300 hover:text-amber-400 transition-colors cursor-pointer"
                        >
                          +91 8130065487
                        </a>
                        <a
                          href={createWhatsAppLink(
                            "+917668783303",
                            "Hi ANM Exports! I'm interested in your handcrafted lighting solutions. I'd like to discuss a potential partnership."
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-stone-300 hover:text-amber-400 transition-colors cursor-pointer"
                        >
                          +91 7668783303
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin
                      className="text-amber-400 flex-shrink-0 mt-1"
                      size={24}
                    />
                    <div>
                      <p className="font-semibold text-lg">Visit Us</p>
                      <p className="text-stone-300">
                        C 212 Sector 63 noida, uttar pradesh 201301 India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-stone-800 pt-8 text-center text-sm">
            <p>
              &copy; 2025 ANM Exports. All rights reserved. Illuminating
              Elegance, Globally.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
