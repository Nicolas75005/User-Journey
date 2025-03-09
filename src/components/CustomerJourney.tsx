import { motion } from "framer-motion";
import { Button } from "./ui/button";
import {
  ArrowRight,
  Check,
  Clock,
  DollarSign,
  Globe,
  Mail,
  MessageSquare,
  Phone,
  PieChart,
  Share2,
  ShoppingBag,
  Star,
  Users,
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const CustomerJourney = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 text-slate-800">
      {/* Hero Section */}
      <motion.section
        className="relative py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
          Parcours Client : L'Expérience d'Antoine
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-slate-600">
          Découvrez comment l'Agence Digitale Jussieu a transformé l'activité
          d'un ébéniste indépendant grâce à une stratégie digitale sur mesure.
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full shadow-lg"
          >
            Je veux mon site web maintenant ! <ArrowRight className="ml-2" />
          </Button>
        </motion.div>
      </motion.section>

      {/* Journey Steps */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pb-20">
        {/* Step 1 */}
        <JourneyStep
          number="1"
          title="Le Problème : Trop de demandes, pas d'organisation, pas de site web"
          icon={<MessageSquare className="w-12 h-12 text-red-500" />}
          color="red"
        >
          <p className="mb-4">
            Antoine, ébéniste indépendant, a du mal à gérer ses demandes :
          </p>
          <ul className="space-y-2 mb-6">
            <ProblemItem text="Pas de site web → Il ne peut pas montrer son travail à de nouveaux clients." />
            <ProblemItem text="Perte de temps → Trop d'appels et messages désordonnés." />
            <ProblemItem text="Aucune présence en ligne → Difficile d'être trouvé sur Google et les réseaux sociaux." />
          </ul>
          <p className="italic">
            Il décide alors de chercher une solution professionnelle et tombe
            sur l'Agence Digitale Jussieu.
          </p>
        </JourneyStep>

        {/* Step 2 */}
        <JourneyStep
          number="2"
          title="La Prise de Contact : Un Accompagnement sur Mesure"
          icon={<Phone className="w-12 h-12 text-blue-500" />}
          color="blue"
        >
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1">
              <p className="mb-4">
                <span className="inline-block mr-2">
                  <Phone className="w-5 h-5 inline text-blue-500" />
                </span>
                Antoine remplit un formulaire sur le site de l'agence et est
                rapidement rappelé par Nico.
              </p>
              <p className="mb-4">
                <span className="inline-block mr-2">
                  <DollarSign className="w-5 h-5 inline text-blue-500" />
                </span>
                On lui propose une offre sans engagement à 99€/mois comprenant :
              </p>
              <ul className="space-y-2 mb-6 pl-8">
                <BenefitItem text="Création et gestion du site" />
                <BenefitItem text="Hébergement et maintenance inclus" />
                <BenefitItem text="Conseils en digitalisation" />
              </ul>
              <p>
                <span className="inline-block mr-2">
                  <Check className="w-5 h-5 inline text-green-500" />
                </span>
                Après validation, Antoine effectue son premier paiement et le
                projet démarre immédiatement.
              </p>
            </div>
            <div className="flex-1 bg-blue-50 p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-lg mb-3 text-blue-700">
                Offre Découverte
              </h4>
              <div className="text-3xl font-bold mb-2">
                99€<span className="text-sm font-normal">/mois</span>
              </div>
              <p className="text-sm text-slate-600 mb-4">Sans engagement</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                  <span>Site web professionnel</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                  <span>Hébergement inclus</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                  <span>Support technique</span>
                </li>
              </ul>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Commencer
              </Button>
            </div>
          </div>
        </JourneyStep>

        {/* Step 3 */}
        <JourneyStep
          number="3"
          title="Conception et Mise en Ligne du Site Web"
          icon={<Globe className="w-12 h-12 text-green-500" />}
          color="green"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-4 text-green-700">
                Phase de conception :
              </h4>
              <ul className="space-y-3 mb-6">
                <BenefitItem text="Récupération des images et des textes pour présenter son activité." />
                <BenefitItem text="Première maquette interactive en 3 jours." />
                <BenefitItem text="Modifications en fonction des retours d'Antoine." />
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4 text-green-700">
                Mise en ligne officielle de son site :
              </h4>
              <ul className="space-y-3 mb-6">
                <BenefitItem text="Nom de domaine professionnel" />
                <BenefitItem text="Site sécurisé (SSL)" />
                <BenefitItem text="Optimisation pour le référencement (SEO)" />
              </ul>
            </div>
          </div>
          <p className="italic text-center mt-4">
            Antoine a désormais un site fonctionnel et optimisé pour attirer des
            clients.
          </p>
          <div className="mt-8 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-slate-800 p-2 flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="ml-4 bg-white bg-opacity-10 rounded px-2 py-1 text-xs text-white">
                www.antoine-ebeniste.fr
              </div>
            </div>
            <div className="p-4 h-40 flex items-center justify-center border-t border-slate-200">
              <p className="text-center text-slate-500">
                Aperçu du site d'Antoine avec ses créations et services
              </p>
            </div>
          </div>
        </JourneyStep>

        {/* Step 4 */}
        <JourneyStep
          number="4"
          title="Booster la Visibilité : Publicité et Réseaux Sociaux"
          icon={<PieChart className="w-12 h-12 text-purple-500" />}
          color="purple"
        >
          <p className="mb-6">
            Maintenant que le site est prêt, il faut le rendre visible et
            attirer du trafic.
          </p>

          <h4 className="font-semibold text-lg mb-4 text-purple-700">
            L'Agence Digitale Jussieu met en place :
          </h4>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h5 className="font-semibold mb-2">Publicités ciblées</h5>
              <p className="text-sm text-slate-600">
                Facebook & Instagram → Antoine voit son trafic doubler.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center">
                <Globe className="w-8 h-8 text-purple-600" />
              </div>
              <h5 className="font-semibold mb-2">Google My Business</h5>
              <p className="text-sm text-slate-600">
                Son atelier apparaît dans les recherches locales.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center">
                <MessageSquare className="w-8 h-8 text-purple-600" />
              </div>
              <h5 className="font-semibold mb-2">Animation des réseaux</h5>
              <p className="text-sm text-slate-600">
                Des posts réguliers mettent en avant son savoir-faire.
              </p>
            </div>
          </div>

          <p className="italic text-center">
            Grâce à cela, Antoine décroche ses premiers clients via internet.
          </p>
        </JourneyStep>

        {/* Step 5 */}
        <JourneyStep
          number="5"
          title="L'Activité Explose : Ajout de Fonctionnalités pour Gérer la Croissance"
          icon={<ShoppingBag className="w-12 h-12 text-amber-500" />}
          color="amber"
        >
          <p className="mb-6">
            Avec cette nouvelle visibilité, Antoine doit gérer plus de clients
            et plus de demandes.
          </p>

          <h4 className="font-semibold text-lg mb-4 text-amber-700">
            L'agence lui propose des évolutions adaptées :
          </h4>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <FeatureCard
              icon={<Clock />}
              title="Module de réservation"
              description="Ajout d'un module de réservation en ligne pour planifier ses rendez-vous."
            />

            <FeatureCard
              icon={<ShoppingBag />}
              title="Boutique e-commerce"
              description="Mise en place d'une boutique e-commerce pour vendre de petites créations."
            />

            <FeatureCard
              icon={<MessageSquare />}
              title="Chatbot"
              description="Installation d'un chatbot pour automatiser les réponses aux questions fréquentes."
            />
          </div>

          <p className="italic text-center">
            L'agence ajuste le site pour qu'il grandisse avec l'activité
            d'Antoine.
          </p>
        </JourneyStep>

        {/* Step 6 */}
        <JourneyStep
          number="6"
          title="Antoine passe à la vitesse supérieure 🚀"
          icon={<Star className="w-12 h-12 text-indigo-500" />}
          color="indigo"
        >
          <p className="mb-6">
            Avec la montée en charge, Antoine décide d'augmenter son budget site
            et publicité.
          </p>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <h4 className="font-semibold text-lg mb-4 text-indigo-700">
                L'agence lui propose un plan premium :
              </h4>
              <ul className="space-y-3 mb-6">
                <BenefitItem text="Ajout d'un suivi plus personnalisé" />
                <BenefitItem text="Augmentation du budget pub pour booster encore plus les ventes" />
                <BenefitItem text="Optimisation du référencement avancé" />
              </ul>
            </div>

            <div className="flex-1 bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-6">
                <h4 className="font-semibold text-lg text-indigo-700">
                  Plan Premium
                </h4>
                <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm">
                  Recommandé
                </span>
              </div>
              <div className="text-3xl font-bold mb-2">
                249€<span className="text-sm font-normal">/mois</span>
              </div>
              <p className="text-sm text-slate-600 mb-6">Engagement 6 mois</p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Tout ce qui est inclus dans l'offre de base</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Budget publicitaire de 150€/mois inclus</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Référencement local optimisé</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Rapport mensuel de performance</span>
                </div>
              </div>

              <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                Passer au Premium
              </Button>
            </div>
          </div>

          <p className="italic text-center mt-6">
            Antoine voit une accélération de son chiffre d'affaires et un flux
            de clients encore plus stable.
          </p>
        </JourneyStep>

        {/* Step 7 - Highlight */}
        <JourneyStep
          number="7"
          title="Recommandation et Commissions : Gagner en Recommandant"
          icon={<Share2 className="w-12 h-12 text-pink-500" />}
          color="pink"
          highlight={true}
        >
          <p className="mb-6">
            Convaincu de la valeur de l'agence, Antoine recommande le service à
            d'autres artisans.
          </p>

          <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-8 rounded-xl shadow-lg border border-pink-100 mb-8">
            <h4 className="font-bold text-xl mb-6 text-center text-pink-700">
              Programme de parrainage
            </h4>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-pink-500 mb-2">1</div>
                <h5 className="font-semibold mb-2">Recommandez l'agence</h5>
                <p className="text-sm text-slate-600">
                  Partagez votre expérience avec d'autres artisans ou
                  entrepreneurs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-pink-500 mb-2">2</div>
                <h5 className="font-semibold mb-2">Ils deviennent clients</h5>
                <p className="text-sm text-slate-600">
                  Vos contacts souscrivent à une offre de l'agence.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-pink-500 mb-2">3</div>
                <h5 className="font-semibold mb-2">Vous gagnez</h5>
                <p className="text-sm text-slate-600">
                  Recevez le montant du premier mois d'abonnement en commission.
                </p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg font-medium mb-4">
                Un cercle vertueux qui permet d'amortir votre propre abonnement
                tout en aidant d'autres indépendants.
              </p>
              <Button className="bg-pink-600 hover:bg-pink-700">
                Rejoindre le programme
              </Button>
            </div>
          </div>
        </JourneyStep>

        {/* Step 8 */}
        <JourneyStep
          number="8"
          title="Résultats : Une Croissance Exponentielle 🚀"
          icon={<PieChart className="w-12 h-12 text-teal-500" />}
          color="teal"
        >
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-lg mb-4 text-teal-700">
                Résultats obtenus
              </h4>
              <ul className="space-y-3">
                <ResultItem text="Antoine attire plus de clients et automatise la gestion des demandes." />
                <ResultItem text="Son site est devenu une référence locale et il se fait connaître facilement." />
                <ResultItem text="Il ne perd plus de temps en tâches chronophages, tout est optimisé." />
                <ResultItem text="Il développe sa boutique en ligne et génère un revenu passif." />
                <ResultItem text="Grâce au programme de recommandation, son abonnement est en partie remboursé." />
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg shadow-md flex flex-col justify-center">
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-teal-600 mb-2">
                  +127%
                </div>
                <p className="text-lg">d'augmentation du chiffre d'affaires</p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-teal-600 mb-1">
                    +85%
                  </div>
                  <p className="text-sm">de nouveaux clients</p>
                </div>

                <div>
                  <div className="text-3xl font-bold text-teal-600 mb-1">
                    -40%
                  </div>
                  <p className="text-sm">de temps administratif</p>
                </div>

                <div>
                  <div className="text-3xl font-bold text-teal-600 mb-1">
                    24/7
                  </div>
                  <p className="text-sm">disponibilité en ligne</p>
                </div>

                <div>
                  <div className="text-3xl font-bold text-teal-600 mb-1">
                    +15
                  </div>
                  <p className="text-sm">artisans parrainés</p>
                </div>
              </div>
            </div>
          </div>

          <p className="italic text-center">
            Antoine continue son abonnement et profite des mises à jour et de
            l'accompagnement de l'agence.
          </p>
        </JourneyStep>
      </div>

      {/* CTA Section */}
      <motion.section
        className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          variants={fadeIn}
        >
          Transforme Ton Activité Dès Aujourd'hui !
        </motion.h2>

        <motion.p className="text-xl max-w-3xl mx-auto mb-10" variants={fadeIn}>
          Comme Antoine, booste ton activité dès aujourd'hui ! Contacte l'Agence
          Digitale Jussieu et lance ton projet en 48h.
        </motion.p>

        <motion.div
          variants={fadeIn}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            size="lg"
            className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-6 text-lg rounded-full shadow-lg"
          >
            Je veux mon site web maintenant ! <ArrowRight className="ml-2" />
          </Button>
        </motion.div>
      </motion.section>
    </div>
  );
};

const JourneyStep = ({
  number,
  title,
  children,
  icon,
  color,
  highlight = false,
}) => {
  const bgColor = highlight ? `bg-${color}-50` : "bg-white";
  const borderColor = highlight ? `border-${color}-200` : "border-slate-100";

  return (
    <motion.div
      className={`mb-16 ${highlight ? "relative z-10" : ""}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <motion.div className="flex items-center mb-6" variants={fadeIn}>
        <div
          className={`w-16 h-16 rounded-full bg-${color}-100 flex items-center justify-center mr-4 shadow-md`}
        >
          <span className="text-2xl font-bold text-slate-700">{number}</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold">{title}</h3>
      </motion.div>

      <motion.div
        className={`p-8 rounded-xl shadow-lg ${bgColor} border ${borderColor} ${highlight ? "transform md:-rotate-1" : ""}`}
        variants={fadeIn}
      >
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="md:w-16 flex justify-center">{icon}</div>
          <div className="flex-1">{children}</div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProblemItem = ({ text }) => (
  <li className="flex items-start">
    <span className="inline-block mr-2 mt-1">❌</span>
    <span>{text}</span>
  </li>
);

const BenefitItem = ({ text }) => (
  <li className="flex items-start">
    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
    <span>{text}</span>
  </li>
);

const ResultItem = ({ text }) => (
  <li className="flex items-start">
    <Check className="w-5 h-5 text-teal-500 mr-2 mt-0.5" />
    <span>{text}</span>
  </li>
);

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="mb-4 bg-amber-100 w-14 h-14 rounded-full flex items-center justify-center">
      <div className="text-amber-600">{icon}</div>
    </div>
    <h5 className="font-semibold mb-2">{title}</h5>
    <p className="text-sm text-slate-600">{description}</p>
  </div>
);

export default CustomerJourney;
