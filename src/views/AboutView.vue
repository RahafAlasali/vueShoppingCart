<template>
  <div class="about-page">
    <!-- Hero Section -->
    <section class="about-hero">
      <div class="hero-bg">
        <v-img src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1600" height="870" cover></v-img>
        <div class="hero-gradient-overlay"></div>
      </div>
      <v-container class="hero-content">
        <v-row>
          <v-col cols="12" class="max-w-4xl">
            <span class="hero-badge">Our Essence</span>
            <h1 class="hero-title">
              Curation is an act <br />of intentionality.
            </h1>
            <p class="hero-description">
              We believe the objects in your life should be as meaningful as the
              moments they inhabit. Crafted for the intentional curator.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Our Journey Section -->
    <section class="journey-section">
      <v-container>
        <v-row class="journey-grid" align="center" justify="center">
          <v-col cols="12" md="5" class="journey-image-col px-4">
            <div class="journey-image-wrapper">
              <v-img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800" height="500" cover
                class="rounded-xl"></v-img>
            </div>
            <div class="journey-decorator"></div>
          </v-col>
          <v-col cols="12" md="7" class="journey-text-col px-4">
            <h2 class="journey-label">Our Journey</h2>
            <h3 class="journey-heading">
              From a single sketchbook to a global atelier.
            </h3>
            <div class="journey-text">
              <p>
                Founded in 2018, The Editorial Merchant began with a simple
                observation: the world was moving too fast, and the quality of
                our everyday objects was suffering. We wanted to create a space
                that slowed things down.
              </p>
              <p>
                What started as a small collection of sourced ceramics from the
                Amalfi Coast has grown into a full-scale digital atelier. We
                partner with masters of craft—weavers in Kyoto, glassblowers in
                Venice, and tanners in Tuscany—to bring you pieces that
                transcend seasonal trends.
              </p>
              <p>
                Every item in our collection passes through a rigorous vetting
                process. If it doesn't have a story, a soul, and the stamina to
                last a lifetime, it doesn't belong in our merchant house.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Core Principles Section -->
    <section class="principles-section">
      <v-container>
        <div class="text-center mb-14">
          <h2 class="principles-heading">Core Principles</h2>
          <p class="principles-subtext">
            The pillars that define every decision we make, from initial sketch
            to final delivery.
          </p>
        </div>
        <v-row>
          <v-col cols="12" md="4" v-for="(value, index) in values" :key="index">
            <v-card class="value-card" :class="{ 'value-card-offset': index === 1 }" elevation="0">
              <div class="value-icon-wrapper">
                <v-icon size="32" color="primary">
                  {{ value.icon }}
                </v-icon>
              </div>
              <h4 class="value-title">{{ value.title }}</h4>
              <p class="value-text">{{ value.description }}</p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Behind the Scenes Section -->
    <section class="behind-section">
      <v-container>
        <v-row class="behind-header" justify="space-between" align="end">
          <v-col cols="12" md="8">
            <h2 class="behind-label">The Process</h2>
            <h3 class="behind-heading">Behind the Scenes</h3>
            <p class="behind-text">
              A glimpse into our workshops and the meticulous craft that goes
              into every product.
            </p>
          </v-col>
          <v-col cols="12" md="4" class="text-md-right">
            <a href="#" class="behind-link">
              View our artisans
              <v-icon size="20" class="ml-1">mdi-arrow-right</v-icon>
            </a>
          </v-col>
        </v-row>
        <v-row class="behind-grid" no-gutters>
          <v-col cols="12" md="6" class="behind-cell behind-cell-large">
            <v-img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCcIcq8HNXoDSOACUH8VdP8diKMRxSGxTqUgQRxyG2JD6fVBF9tnxrQKMD70ZM686OtzAhIvekksFugsv4HmVV0RNkQoDxnYkhGKoLQhNeuXuAC3P77IeW5rCI4QDvBWnHwrWYDavkeFNi7cAJE558ksTtUzeQQooykpHXyTJJ8ULh81Y69koppYPUVSyjHyPJoMIpbPKeBNH4iTHNfJT8mr9DUa2slix47tV3h7KrXAQnHEKOGfD0uZQm9_BMmjUVSvUdAAVqCuNl?w=800"
              height="100%" cover class="behind-img"></v-img>
          </v-col>
          <v-col cols="12" md="6">
            <v-row no-gutters class="behind-subgrid">
              <v-col cols="12" md="6" class="behind-cell">
                <v-img src="https://images.unsplash.com/photo-1559563362-c667ba5f5480?w=600" height="100%" cover
                  class="behind-img"></v-img>
              </v-col>
              <v-col cols="12" md="6" class="behind-cell">
                <v-img src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400" height="100%" cover
                  class="behind-img"></v-img>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Founders Quote Section -->
    <section class="founders-section">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8" class="text-center">
            <v-icon size="48" color="secondary" class="mb-8 quote-icon">mdi-format-quote-close</v-icon>
            <blockquote class="founders-quote">
              "Luxury isn't about the price tag; it's about the depth of
              consideration that went into the object's existence."
            </blockquote>
            <div class="founder-info">
              <v-avatar size="80" class="founder-avatar mb-4">
                <v-img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200"></v-img>
              </v-avatar>
              <div class="founder-details">
                <span class="founder-name">Julian Vance</span>
                <span class="founder-role">Creative Director & Founder</span>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
export default {
  name: "AboutView",
  data() {
    return {
      values: [
        {
          icon: "mdi-leaf",
          title: "Radical Honesty",
          description:
            "Full transparency in our supply chain. We know where every thread comes from and the hands that wove it.",
        },
        {
          icon: "mdi-palette",
          title: "Artisanal Integrity",
          description:
            'We don\'t do "mass-produced." Each piece is finished by hand, ensuring a unique character that cannot be replicated by machines.',
        },
        {
          icon: "mdi-clock-time-four",
          title: "Heirloom Quality",
          description:
            "We design for the next fifty years, not the next five. Our materials are chosen for their ability to age beautifully.",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.about-page {
  min-height: 100vh;
  overflow-x: hidden;
}

/* ============ HERO SECTION ============ */
.about-hero {
  position: relative;
  min-height: 870px;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  padding-bottom: 80px;
  margin-top: -64px;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-gradient-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top,
      rgba(0, 43, 76, 0.4) 0%,
      rgba(0, 43, 76, 0.1) 40%,
      transparent 100%);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero-badge {
  display: inline-block;
  padding: 6px 16px;
  margin-bottom: 24px;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  color: white;
  border-radius: 9999px;
}

.hero-title {
  font-family: "Cormorant Garamond", serif;
  font-size: 4.5rem;
  font-weight: 700;
  color: white;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin-bottom: 32px;
}

.hero-description {
  font-size: 1.3rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  line-height: 1.7;
}

/* ============ JOURNEY SECTION ============ */
.journey-section {
  padding: 128px 0;
  background-color: #f9f9fe;
}

.journey-grid {
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}

.journey-grid .v-col {
  padding: 0 24px;
}

.journey-image-col {
  position: relative;
}

.journey-image-wrapper {
  position: relative;
  z-index: 2;
}

.journey-image-wrapper .v-img {
  border-radius: 12px;
  box-shadow: 0 40px 60px -20px rgba(26, 28, 31, 0.06);
}

.journey-decorator {
  position: absolute;
  bottom: -32px;
  right: -32px;
  width: 192px;
  height: 192px;
  background-color: #ffdcc7;
  border-radius: 12px;
  z-index: 1;
  display: none;
}

@media (min-width: 960px) {
  .journey-decorator {
    display: block;
  }
}

.journey-label {
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #05453e;
  margin-bottom: 24px;
}

.journey-heading {
  font-family: "Cormorant Garamond", serif;
  font-size: 2.2rem;
  font-weight: 700;
  color: #05453e;
  line-height: 1.25;
  margin-bottom: 32px;
}

.journey-text {
  color: #42474f;
  font-size: 1.05rem;
  line-height: 1.8;
}

.journey-text p {
  margin-bottom: 24px;
}

.journey-text p:last-child {
  margin-bottom: 0;
}

/* ============ PRINCIPLES SECTION ============ */
.principles-section {
  padding: 128px 0;
  background-color: #ededf2;
}

.principles-heading {
  font-family: "Cormorant Garamond", serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: #05453e;
  margin-bottom: 16px;
}

.principles-subtext {
  color: #42474f;
  max-width: 500px;
  margin: 0 auto;
  font-size: 1rem;
  line-height: 1.6;
}

.value-card {
  background-color: white;
  border-radius: 12px;
  padding: 40px 30px;
  height: 100%;
  transition: all 0.3s ease;
  box-shadow: 0 40px 60px -20px rgba(26, 28, 31, 0.06);
}

.value-card:hover {
  background-color: #05453e;
  transform: translateY(-4px);
}

.value-card-offset {
  transform: translateY(32px);
}

.value-card-offset:hover {
  transform: translateY(28px);
}

.value-icon-wrapper {
  width: 48px;
  height: 48px;
  border-radius: 8px;
  background-color: #cbe7f5;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
  transition: background-color 0.3s ease;
}

.value-card:hover .value-icon-wrapper {
  background-color: #004170;
}

.value-card:hover .value-icon-wrapper .v-icon {
  color: white !important;
}

.value-title {
  font-family: "Cormorant Garamond", serif;
  font-size: 1.35rem;
  font-weight: 700;
  color: #05453e;
  margin-bottom: 16px;
  transition: color 0.3s ease;
}

.value-card:hover .value-title {
  color: white;
}

.value-text {
  color: #42474f;
  line-height: 1.7;
  font-size: 0.95rem;
  transition: color 0.3s ease;
}

.value-card:hover .value-text {
  color: rgba(255, 255, 255, 0.8);
}

/* ============ BEHIND SCENES SECTION ============ */
.behind-section {
  padding: 128px 0;
  background-color: #f9f9fe;
}

.behind-header {
  margin-bottom: 64px;
}

.behind-label {
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #05453e;
  margin-bottom: 24px;
}

.behind-heading {
  font-family: "Cormorant Garamond", serif;
  font-size: 2.2rem;
  font-weight: 700;
  color: #05453e;
  margin-bottom: 0;
}

.behind-text {
  color: #42474f;
  font-size: 1.05rem;
  line-height: 1.6;
  margin-top: 24px;
}

.behind-link {
  color: #05453e;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  font-size: 0.95rem;
  transition: gap 0.3s ease;
}

.behind-link:hover {
  gap: 12px;
}

.behind-link .v-icon {
  transition: transform 0.3s ease;
}

.behind-link:hover .v-icon {
  transform: translateX(4px);
}

.behind-grid {
  border-radius: 12px;
  overflow: hidden;
}

.behind-cell {
  overflow: hidden;
}

.behind-cell-large {
  min-height: 400px;
}

.behind-subgrid {
  height: 100%;
}

.behind-subgrid .behind-cell {
  min-height: 200px;
}

.behind-subgrid .behind-cell:first-child .behind-img {
  height: 200px;
}

.behind-subgrid .behind-cell:last-child .behind-img {
  height: 200px;
}

.behind-img {
  transition: transform 0.7s ease;
}

.behind-cell:hover .behind-img {
  transform: scale(1.05);
}

/* ============ FOUNDERS QUOTE SECTION ============ */
.founders-section {
  padding: 128px 0;
  background-color: #05453e;
  color: white;
}

.quote-icon {
  opacity: 0.5;
}

.founders-quote {
  font-family: "Cormorant Garamond", serif;
  font-size: 3rem;
  font-weight: 300;
  font-style: italic;
  line-height: 1.2;
  margin-bottom: 48px;
  color: white;
}

.founder-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.founder-avatar {
  border: 2px solid rgba(255, 255, 255, 0.2);
}

.founder-details {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.founder-name {
  font-weight: 700;
  font-size: 1.2rem;
  display: block;
  margin-bottom: 4px;
}

.founder-role {
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
}

/* ============ RESPONSIVE ============ */
@media (max-width: 960px) {
  .about-hero {
    min-height: 600px;
    padding-bottom: 60px;
  }

  .hero-title {
    font-size: 3rem;
  }

  .hero-description {
    font-size: 1.1rem;
  }

  .journey-section,
  .principles-section,
  .behind-section,
  .founders-section {
    padding: 80px 0;
  }

  .journey-heading,
  .behind-heading {
    font-size: 1.8rem;
  }

  .principles-heading {
    font-size: 2rem;
  }

  .founders-quote {
    font-size: 2rem;
  }

  .value-card-offset {
    transform: none;
  }
}

@media (max-width: 600px) {
  .about-hero {
    min-height: 500px;
    padding-bottom: 40px;
  }

  .hero-title {
    font-size: 2.2rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .hero-badge {
    font-size: 0.6rem;
  }

  .journey-section,
  .principles-section,
  .behind-section,
  .founders-section {
    padding: 60px 0;
  }

  .journey-heading,
  .behind-heading {
    font-size: 1.5rem;
  }

  .principles-heading {
    font-size: 1.75rem;
  }

  .founders-quote {
    font-size: 1.6rem;
  }

  .value-card {
    padding: 30px 20px;
  }
}
</style>
