// Libraries
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch } from 'react-router';

import { getStore } from 'universal/selectors/store';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
// Actions

const css = oxygenCss({
  root: {
    margin: '156px auto',
    width: Units.fullWidth,
  }
});

const terms = {
  ['en_US']: () => {
    return (
      <div>
        <h1>Terms (2017-06-08)</h1>
        <h2>1. The service</h2>
        <p>The course or the guide is developed with the help of Coursio’s service. Coursio is a service for creation of web-based courses and guides that are distributed electronically. The service allows businesses to create create online courses consisting of video, text, images, audio, and interactive features. The service includes hosting and operating the spirit of the platform, support and in some cases even a shop for the sale and presentation of the courses.</p>
        <p>Coursio reserves the right to change these terms and conditions on this page and the conditions will be applied 30 days following the update.</p>
        <p>After having completed the purchase of a guide or course produced by Coursio’s service and through the presentation page developed by Coursio’s tool, you will be given access to the material. As a part of purchase process, you register a customer account to study the material through Coursio’s service or use a previously registered account. When the purchase is processed, you will enter Coursio’s services and can view the material. To access the material please log in through the site <a href='https://app.coursio.com' target='_blank'>https://app.coursio.com</a>.</p>
        <p>Creation of customer account is permitted only with a valid email address. You are responsible for the email address stated is correct and active. You can change the email address stated under “Settings”.</p>
        <p>To register in Coursio you must be over 18 years.</p>
        <h2>2. Payment</h2>
        <p>To purchase the course you have 2 options depending on what country you visit our store from:</p>
        <b>Option 1. (Swedish connection) Klarna</b>
        <p>Klarna AB (publ), Corp. ID No. 556737-0431, Sveavägen 46, 111 34 Stockholm, Sweden (“Klarna”) is a company supplying payment methods to Merchants selling online and through other agreed sales channels. Klarna Checkout is Klarna´s checkout solution for online shops which includes a number of payment options (“Klarna Checkout”). The payment options included in Klarna Checkout (the “Payment Options”) include both products provided by Klarna itself, such as Invoice and Part Payment, as well as payment options offered via third parties (“Third Party Payment Option Provider”), such as debit/credit card (Visa and Mastercard) and direct banking. The Payment Options offered vary from country to country and may change from time to time. The Merchant operates an E-store(s) from the approved and agreed upon web addresses/URLs (the “E-store”). The Merchant can integrate Klarna Checkout into its E-store or any other purchase channels that may have been agreed between the Parties and thereby enable the Merchant’s customers to pay via Klarna Checkout. Such integration may be done by the Merchant itself or through the use of a third party.</p>
        <p>The Parties hereby agree to include Klarna Checkout and, consequently, the from time to time available Payment Options into the E-store or any other agreed purchase channels for the countries specified through the agreement between the Merchant and the Partner making the Service available to the Merchant or regulated directly between the Merchant and Klarna, and commit to cooperate in order to prepare and provide the Services.</p>
        <b>Option 2 (International connection) . Card payment through Stripe</b>
        <p>We are using Stripe as a third party payment option for card payments. All sensitive information, such as credit card information is handled by Stripe using a secure payment and SSL server. Coursio don't store any card information. We accept Visa, MasterCard and AMEX. You can read Stripes <a href='https://stripe.com/se/legal' target='_blank'>General Terms and Conditions</a> and <a href='https://stripe.com/se/privacy' target='_blank'>Privacy</a> by each link.</p>
        <h2>3. Returns</h2>
        <p>When you buy a course or a guide, the purchase does not apply to e-commerce law. When the payment has been processed and you get access to material, your right to withdrawal is exhausted. Is the product defective or incorrect, you are welcome to contact our customer service department at support@coursio.com.</p>
        <h2>4. Technical conditions</h2>
        <p>The service requires access to the Internet. You are responsible for the costs incurred in the use of internet.</p>
        <h2>5. Responsibility</h2>
        <p>When buying a course or a guide access is only granted to the person who bought it. You may not in any way spread further content to others or share the password to your account.</p>
        <h2>6. Coursio</h2>
        <p>Material purchased through Coursio is available around the clock, seven days a week. Coursio, however, does not guarantee that the service is always free of errors or interruptions. If the deficiencies or interruption in service occurs, Coursio reserves the right to correct them without breach of contract. Coursio also reserves the right, with reason, to close the service for upgrades and maintenance.</p>
        <h2>7. Disclaimer</h2>
        <p>Coursio is a service to publish material in the form of courses and guides. Through the service, customers of Coursio sell courses and guides, either through their own websites, other sales channels or where a presentation page is included in Coursio’s service. Sales are made through this page and are managed via Coursio's accounts at Stripe and Klarna. Coursio is not responsible for any disputes, claims, losses or damages of any kind that may arise from documents or information that are implemented and shared by Coursio’s customers or participants in customer courses and guides.</p>
        <p>We do not control the content of the materials submitted by our customers and do not guarantee in any way validity or accuracy of the content. As a buyer of courses or guides you acknowledge that you may be exposed to offensive or inappropriate content and understand that Coursio bears no responsibility of this type of content and assume no responsibility for the content itself.</p>
        <p>Via Coursio you can access links to third party sites either by the tool itself or the material that clients has provided. Coursio take no responsibility for these third-party sites and do not control them in any way. As a user of Coursio should take appropriate steps to assess whether it is advisable to visit such third party site and protect your own personal information and privacy at such a page.</p>
        <h2>8. Freedom of choice</h2>
        <p>Any dispute under these terms shall be governed by Swedish law in the Stockholm District Court.</p>
        <p>Questions regarding this statement, addressed to Coursio AB, Tegnérgatan 1, 111 40 Stockholm, or info@coursio.se.</p>
        <h2>9. Personal data</h2>
        <p>To register in Coursio’s service requires only an e-mail address and first and last name. When you provide your personal details, you agree that we store and use your information in our business to fulfill the contract against you. In this part we will inform you of updates that occur in the material you have access to and for general updates to the service.</p>
        <p>You also admit that we share this personal data with the customer who is the provider of the course content. These customers may use this information to contact you for other purposes. It is your responsibility as a user to ensure what the customer will do with this information and how it will be stored. Coursio not control the uses or how this information is stored by our Customers.</p>
        <p>Upon deregistration of your Coursio account  Coursio will delete all information of you. However, it is your responsibility to inform the Customers whose material you have purchased as well. You have the right to request a deregistration, correction of potentially wrong data in regards to you. This has to be done in via email to support@coursio.com. You can also lock the access of your user data for marketing done by the Customer.</p>
      </div>
    );
  },
  ['sv_SE']: () => {
    return (
      <div>
        <h1>Användarvillkor (2017-06-08)</h1>
        <h2>1. Tjänsten</h2>
        <p>Villkor vid köp av kurs eller guide som är framtagen med hjälp av Coursios tjänst.</p>
        <p>Coursio är en tjänst för att skapa webbaserade kurser och guider som distribueras elektroniskt. Tjänsten möjliggör företag att skapa online-kurser bestående av video, text, bilder, ljud och interaktiva funktioner. I tjänsten ingår hosting och drift av plattformen, support och i vissa fall även en webshop för presentation och försäljning av kurserna.</p>
        <p>Coursio reserverar sig rätten att ändra dessa villkor på denna sida och villkoren kommer appliceras 30 dagar från uppdateringen.</p>
        <p>Efter att ha genomfört köpet av en guide eller kurs som producerats med Coursios tjänst och via de presentationssidor som framtagits av Coursios verktyg får du tillgång till materialet. Vid genomförandet av köpet registrerar du ett kundkonto för att ta del av material via Coursios tjänst eller använder ett tidigare registrerat konto. När köpet gått igenom kommer du in i Coursios tjänst och tar del av materialet. För att framöver komma åt materialet loggar du in via sidan <a href='https://app.coursio.com' target='_blank'>https://app.coursio.com</a>.</p>
        <p>Skapande av kundkonto medges endast den som har en giltig e-postadress. Du ansvarar för att den e-postadress som angivits är riktig och aktiv. Du kan själv ändra den angivna e-postadressen under “Inställningar”.</p>
        <p>För att registrera dig i Coursio ska du ha fyllt 18 år.</p>

        <h2>2. Betalning</h2>
        <p>Då köpet sker genom en presentationssida som framtagits av Coursios verktyg finns följande betalningsalternativ beroende på vart du befinner dig då du besöker oss:</p>
        <b>Alt 1. (Svensk uppkoppling) Klarna, Faktura och Kort</b>
        <p>Betalning hanteras genom Klarna Checkout, som erbjuds i samarbete med Klarna AB. Klarna Checkout skiljer på köp och betalning. Först bekräftar du ditt köp, sedan väljer du hur du vill betala. Du kan välja på Klarna faktura, Klarna konto, att betala direkt med kort eller med banköverföring.</p>
        <p>Klarna Checkout: Genom att använda Klarna Checkout godkänner du Klarna AB:s (556737-0431, Sveavägen 46, 111 34 Stockholm), "Klarna", villkor. För att få använda Klarna Checkout måste du vara minst 15 år.</p>
        <b>Identifiering, anpassning och riskbedömning</b>
        <p>För att säkert kunna identifiera dig och förhindra obehörigt nyttjande eller missbruk av Klarna Checkout samt för att uppfylla kraven enligt god kreditgivningssed behöver Klarna säkerställa din identitet. Klarna inhämtar tilläggsinformation såsom personnummer, namn och adress samt, vid val av kreditalternativ, kreditinformation från olika leverantörer. Klarna behöver även använda den information som du kan ha lämnat vid tidigare köp, allmänt tillgänglig information på internet samt information om hur du tidigare har uppfyllt våra betalningsvillkor, för att göra en riskbedömning. Klarna Checkout anpassar automatiskt riskbedömningen, och därmed utformningen av tjänsten, för varje gång du använder tjänsten och du behöver inte ange mer information än nödvändigt. I vissa fall visas tidigare angiven och av Klarna godkänd adress till dig så snart du uppgivit din e-postadress och ditt postnummer. Den godkända adressen får endast användas i syfte att förifyllda adressuppgifterna i direkt samband med ett köp. Du kan enkelt undvika att den godkända adressen förifylls genom att välja att tillämpa en PIN-kod. Genom att slutföra köpet bekräftar du din identitet och korrekt leveransadress.</p>
        <b>Betalning, avgifter</b>
        <p>Klarna Checkout uppvisar de betalningsalternativ som kan erbjudas dig. Aktuella betalningsalternativ som för närvarande kan komma att erbjudas genom Klarna Checkout är faktura, kontokredit, kortbetalning eller direktbetalning via bank. Faktura ligger som förvalt betalningsalternativ där så är möjligt. Vid betalning med faktura gäller Klarnas vid var tid gällande fakturavillkor; f.n. 14 dagars kredit, en påminnelseavgift tillkommer vid utebliven betalning. Har du handlat för under 60 kr tillkommer 29 kr, och har du handlat för 60 kr eller mer tillkommer 60 kr i påminnelseavgift. Även en dröjsmålsränta motsvarande 24 % plus vid var tid av Riksbanken fastställd referensränta. Det kostar inget att använda Klarna Checkout. Eventuella skatter eller avgifter kan dock tillkomma genom valt betalningsalternativ, se närmare de enskilda betalningsvillkoren för det alternativ du väljer. Klarna kan när som helst addera eller ta bort ett eller flera betalningsalternativ av de som erbjuds i Klarna Checkout.</p>
        <p>När du slutför ett köp via Klarna Checkout träffar du och Klarna ett avtal där Klarna bl.a. garanterar att du inte behöver betala om du inte får dina varor. Klarna ersätter samtidigt butiken för det du handlat och övertar därmed rätten att få betalt. Oavsett vilket betalsätt du väljer så går din betalning därmed till att reglera den fordran Klarna har.</p>
        <p>Du kan läsa de fullständiga villkoren för Klarna Checkout <a href='http://cdn.klarna.com/1.0/shared/content/legal/terms/Klarna/sv_se/checkout' target='_blank'>här.</a> </p>
        <b>Alt 2. (Internationell uppkoppling) Kortbetalning via Stripe</b>
        <p>Vi använder oss tjänst från extern part, Stripe, för hantering av kortbetalningar. All känslig information, såsom kortuppgifter, behandlas enbart av Stripe via en säker betal- och SSL-server. Vi hanterar och lagrar således inga kortuppgifter. Vi accepterar bland annat Visa, Mastercard och AMEX. För Stripes betaltjänster gäller Stripes <a href='https://stripe.com/se/legal' target='_blank'>allmänna villkor</a> och <a href='https://stripe.com/se/privacy' target='_blank'>sekretess-policy</a>, vilken ni finner under respektive länk.</p>
        <h2>3. Ångerrätt</h2>
        <p>Då du köper tillgång till en tjänst gäller inte distanshandelslagen. Då betalningen gått igenom och du fått tillgång till materialet anses ångerrätten förbrukad. Ångerrätten gäller inte heller defekta eller felaktiga varor. Är produkten defekt eller felaktig är du istället välkommen att kontakta vår kundservice och göra en reklamation via kursskaparen.</p>

        <h2>4. Tekniska förutsättningar</h2>
        <p>Tjänsten kräver tillgång till internet samt en modern/uppdaterad webbläsare. Du ansvarar själv för de kostnader som uppstår i användandet av internetuppkoppling.</p>
        <h2>5. Ansvar</h2>
        <p>Vid köp av en kurs eller guide gäller tillgången till materialet endast för den personen som har köpt det. Du får inte på något sätt sprida vidare innehållet till andra eller dela lösenord till ditt konto.</p>
        <h2>6. Coursio</h2>
        <p>Material köpt via Coursio finns tillgängligt dygnet runt, sju dagar i veckan. Coursio ger dock inga garantier för att tjänsten alltid är fri från fel eller avbrott. Om brister eller avbrott i tjänsten uppstår skall Coursio ges möjlighet att rätta till dessa utan att avtalsbrott skall anses föreligga. Coursio har också rätt att, i rimlig omfattning, stänga tjänsten för till exempel uppgraderingar och service.</p>
        <h2>7. Ansvarsfriskrivning</h2>
        <p>Coursio är en tjänst för att publicera material i form av kurser och guider. Genom tjänsten kan Coursios kunder sälja kurser och guider antingen via sina egna hemsidor, andra försäljningskanaler eller i de fall de vill via en presentationssida som ingår i Coursios tjänst. I de fall försäljningen sker via denna sida sköts betalningen via Coursios konton på Klarna och Net Payments. Coursio är inte ansvariga för dispyter, krav, förluster, eller skador av något slag som kan uppstå ur handlingar eller information som genomförs och delas av kunder till Coursio eller deltagare i kundernas kurser och guider.</p>
        <p>Vi kontrollerar inte innehållet i de material som läggs upp av våra kunder och garanterar inte på något sätt tillförlitligheten, giltigheten, noggrannheten eller korrektheten i innehållet. Som köpare av kurser eller guider medger du att du kan exponeras för stötande eller olämpligt innehåll och förstår att Coursio bär inget ansvar för att hålla dig borta från denna typ av innehåll och tar inget ansvar för innehållet i sig.</p>
        <p>Via Coursio kan du få tillgång till länkar till tredje parts sidor antingen genom verktyget i sig eller material som kurserna skapare lagt upp. Coursio tar inget ansvar för dessa tredje parts sidor och kontrollerar inte dem på något sätt. Som användare i Coursio bör du ta lämpliga åtgärder för att bedöma om det är lämpligt att besöka en sådan tredje parts sida och skydda din egna personliga information och integritet på en sådan sida.</p>
        <h2>8. Lagval</h2>
        <p>Tvist enligt dessa villkor skall avgöras enligt svensk lag i Stockholms Tingsrätt.</p>
        <p>Frågor kring dessa villkor riktas till Coursio AB, Tegnérgatan 1, 111 40 Stockholm eller info@coursio.com</p>
        <p>Personuppgifter – hur dom hanteras och används</p>
        <p>För att registrera sig i Coursios tjänst krävs endast e-mail adress och För och Efternamn. När du uppger dina personuppgifter hos oss godkänner du att vi lagrar och använder dina uppgifter i vår verksamhet för att fullfölja avtalet gentemot dig. I detta ingår att vi kommer informera dig om uppdateringar som sker i de material du har tillgång till och om generella uppdateringar i tjänsten.</p>
        <p>Du medger också att vi delar denna persondata med den kund som är avsändare för kursen eller guiden som skapats med hjälp av Coursio. Vem kunden är framgår av vem som är skapare av kursen eller guiden du fått tillgång till. Dessa kunder får använda denna information för att kontakta dig i anslutning till kursen som du har tillgång till. Kunderna kan också använda dessa uppgifter i andra syften. Det är ditt ansvar som användare att säkerställa vad Kunden kommer att göra med denna information och hur den kommer att lagras. Coursio kontrollerar inte användningsområdena eller hur den här informationen lagras av våra Kunder.</p>
        <p>Vid avregistrering av ditt Coursio konto kommer Coursio radera alla uppgifter om dig. Det är dock ditt ansvar att säkerställa att så även sker hos de Kunder som du köpt material av. Du har rätt att skriftligen utan kostnad begära ett registerutdrag eller rättelse/radering av eventuellt felaktiga uppgifter om dig. Du kan också spärra uppgifterna mot marknadsföring.</p>
      </div>
    );
  }
}


class TermsContainer extends Component {
  static propTypes = {
    match: PropTypes.object
  }


  render () {
    const {
      name,
      user
    } = this.props;
    const locale = user && user.locale || 'en_US';
    return (
      <div className={css.root}>
        {terms[locale] && terms[locale]()}
      </div>
    );
  }
}


const mapStateToProps = (state, props) => {
  const { name } = props.match.params;
  const store = getStore(state, name);
  return {
    name,
    user: state.auth.user,
    owner: store.owner,
    presentation: store.presentation,
    theme: store.theme,
  };
}

const mapDispatchToProps = (dispatch, props) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(TermsContainer);
