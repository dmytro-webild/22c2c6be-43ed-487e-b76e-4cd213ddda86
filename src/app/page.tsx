"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="small"
        sizing="largeSmallSizeMediumTitles"
        background="aurora"
        cardStyle="glass-elevated"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Signature",
          id: "signature",
        },
        {
          name: "Our Story",
          id: "story",
        },
        {
          name: "Menu",
          id: "menu",
        },
        {
          name: "Reserve",
          id: "contact",
        },
      ]}
      brandName="Xengelation"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCentered
      background={{
        variant: "gradient-bars",
      }}
      title="Handmade Tradition. Modern Azerbaijani Hospitality."
      description="Authentic xengel, Georgian flavors, warm service, and unforgettable evenings in İçərişəhər."
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/stylish-smiling-woman-colorful-outfit-retro-vintage-50-s-cafe-sitting-table_285396-10425.jpg",
          alt: "Dining guest",
        },
        {
          src: "http://img.b2bpic.net/free-photo/group-happy-friends-talking-while-making-order-cafe_637285-7854.jpg",
          alt: "Dining guest",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-one-black-american-female-eats-gourmet-vegetarian-meal-drinks-wine-restaurant_613910-7365.jpg",
          alt: "Dining guest",
        },
        {
          src: "http://img.b2bpic.net/free-photo/pancakes-colored-coffee_1321-877.jpg",
          alt: "Dining guest",
        },
        {
          src: "http://img.b2bpic.net/free-photo/stylish-smiling-beautiful-woman-retro-vintage-50s-cafe-sitting-bar-drinking-milk-shake-cocktail-pink-tshirt-balcj-leather-jacket-jeans-having-fun-cheerful-mood_285396-10732.jpg",
          alt: "Dining guest",
        },
      ]}
      buttons={[
        {
          text: "Reserve a Table",
          href: "#contact",
        },
        {
          text: "Explore the Menu",
          href: "#menu",
        },
      ]}
      buttonAnimation="slide-up"
      marqueeItems={[
        {
          type: "text",
          text: "Traditional Azerbaijani Cuisine",
        },
        {
          type: "text",
          text: "Handmade Xengel",
        },
        {
          type: "text",
          text: "Authentic Georgian Flavors",
        },
        {
          type: "text",
          text: "Centrally Located in İçərişəhər",
        },
        {
          type: "text",
          text: "Unforgettable Dining Experience",
        },
      ]}
    />
  </div>

  <div id="story" data-section="story">
      <TextAbout
      useInvertedBackground={false}
      title="At Xengelation, every table is treated like home."
      buttons={[
        {
          text: "Learn More",
          href: "#about",
        },
      ]}
    />
  </div>

  <div id="signature" data-section="signature">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "d1",
          name: "Meat Xengel",
          price: "12.00 AZN",
          imageSrc: "http://img.b2bpic.net/free-photo/azerbaijani-dushbere-khingal-inside-pottery-bowl-with-herbs_114579-3623.jpg",
        },
        {
          id: "d2",
          name: "Kupati Sausage",
          price: "15.00 AZN",
          imageSrc: "http://img.b2bpic.net/free-photo/tasty-fried-sausages-ketchup-green-plate_114579-63584.jpg",
        },
        {
          id: "d3",
          name: "Acika Sauce",
          price: "5.00 AZN",
          imageSrc: "http://img.b2bpic.net/free-photo/khinkali-served-with-eggplant-rolls-glass-wine_141793-772.jpg",
        },
        {
          id: "d4",
          name: "Çoban Salad",
          price: "8.00 AZN",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-shot-plates-salad-fresh-fruits-vegetable-wooden-surface_181624-46700.jpg",
        },
        {
          id: "d5",
          name: "Georgian Wine",
          price: "25.00 AZN",
          imageSrc: "http://img.b2bpic.net/free-photo/wooden-barrel-with-bottle-glass-wine_23-2148214940.jpg",
        },
        {
          id: "d6",
          name: "Traditional Dessert",
          price: "7.00 AZN",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-cherry-cake-slices-inside-round-plate-with-cherries-pink-desk-cake-biscuit-sugar-sweet_140725-28421.jpg",
        },
      ]}
      title="Signature Dishes"
      description="Handcrafted authenticity served with passion."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "10k+",
          title: "Happy Guests",
          description: "Served with warmth",
          imageSrc: "http://img.b2bpic.net/free-photo/people-holding-facebook-icon_53876-49355.jpg",
        },
        {
          id: "m2",
          value: "15+",
          title: "Recipes",
          description: "Handmade family secrets",
          imageSrc: "http://img.b2bpic.net/free-vector/food-icon-outline-doodle-hand-drawn-cartoon-vector-illustration_56104-2684.jpg",
        },
        {
          id: "m3",
          value: "4.9",
          title: "Rating",
          description: "Google average",
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-woman-holding-golden-stars-icons_53876-71033.jpg",
        },
      ]}
      title="Our Hospitality"
      description="Why we are loved in Baku."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah",
          role: "Foodie",
          testimonial: "Food is tasty, atmosphere cozy, staff welcoming.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-pretty-woman-with-natural-curly-hairstyle-smiling-positive-emotion-happy-isolated-denim-blue-shirt_285396-134.jpg",
        },
        {
          id: "2",
          name: "David",
          role: "Traveler",
          testimonial: "Affordable yet premium. Beautiful presentation.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-pretty-waitress_1098-15705.jpg",
        },
        {
          id: "3",
          name: "Leyla",
          role: "Local",
          testimonial: "Best xengel experience in Baku hands down.",
          imageSrc: "http://img.b2bpic.net/free-photo/funny-african-man-with-bushy-curly-hair-blinking-his-eye-having-warm-broad-smile_273609-14063.jpg",
        },
        {
          id: "4",
          name: "Alex",
          role: "Business",
          testimonial: "Quick service, authentic taste.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-asian-man-friends-reunion_23-2149244687.jpg",
        },
        {
          id: "5",
          name: "Jeyhun",
          role: "Regular",
          testimonial: "Always feels like coming home.",
          imageSrc: "http://img.b2bpic.net/free-photo/customer-experience-creative-collage_23-2149346511.jpg",
        },
      ]}
      title="Guest Voices"
    />
  </div>

  <div id="about" data-section="about">
      <FeatureCardEight
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Fresh Daily",
          description: "Handmade recipes prepared every morning.",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-man-using-avocado-while-preparing-healthy-food-kitchen_637285-3507.jpg",
        },
        {
          title: "Fast Service",
          description: "Enjoy premium quality without long waits.",
          imageSrc: "http://img.b2bpic.net/free-photo/stylish-expert-butler-pesents-something_482257-78342.jpg",
        },
        {
          title: "Cozy Ambience",
          description: "Authentic, warm atmosphere in İçərişəhər.",
          imageSrc: "http://img.b2bpic.net/free-photo/easter-interior-created-with-generative-ai-technology_185193-110029.jpg",
        },
      ]}
      title="Why Guests Love Xengelation"
      description="Experience the Caucasus magic."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "Do you offer delivery?",
          content: "Yes, through local partners.",
        },
        {
          id: "q2",
          title: "Are you family friendly?",
          content: "We love welcoming families of all sizes.",
        },
        {
          id: "q3",
          title: "Where are you located?",
          content: "Opposite Iqtisadiyyat Universiteti, İçərişəhər.",
        },
      ]}
      sideTitle="Questions?"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient",
      }}
      text="Reserve Your Table Tonight"
      buttons={[
        {
          text: "WhatsApp Reservation",
          href: "https://wa.me/994000000",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Socials",
          items: [
            {
              label: "Instagram",
              href: "#",
            },
            {
              label: "TikTok",
              href: "#",
            },
          ],
        },
        {
          title: "Menu",
          items: [
            {
              label: "PDF Menu",
              href: "#",
            },
            {
              label: "Wine List",
              href: "#",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 Xengelation."
      bottomRightText="İçərişəhər, Baku."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
