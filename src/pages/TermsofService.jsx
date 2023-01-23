import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Assets/Styles/text-only-styles.css";

const TermsofService = () => {
	const scope = [
		{
			heading: "Area of application",
			para1: `These general conditions of contracting, access and use are intended to regulate the relationship between the company that owns this business, SPOTLET SOLUTIONS (hereinafter, "SpotLet") and its Users or Clients, by virtue of all transactions carried out through the platform with domain SpotLet.in (hereinafter, “the website” or “platform”).`,
			para2: "As stated in the Legal Notice, this platform and the domains associated with it belong to the owner, which is up to date with its tax and fiscal obligations.",
			para3: "To contact our team, you can do so with the following contact information:",
			para4: `SPOTLET SOLUTIONS PVT. LTD.`,
			para5: `Address: #405, Aparna Green Apartments, Opp: Golf View Apartments, Nanakramguda, Hyderabad – 32, Telangana, India.`,
			para6: `Contact email: support@SpotLet.in`,
			para7: "The purpose of our platform is to facilitate space reservation transactions between “host” and “guest” users. In this way, any transaction carried out through our platform implies that you must take into account and accept, when appropriate, these Terms and Conditions.",
			para8: "We inform you that the online contracting of our services, offered through this platform, is subject to the provisions of the rest of the applicable legal policies, such as the Legal Notice, the Privacy Policy and the Cookie Policy. In this way, in the event that there is a conflict between the former and these general conditions, the latter will prevail always and in any case. You must also take into account the particular contracting conditions, which will be detailed at the appropriate time, when appropriate.",
		},
		{
			heading: "Object of these conditions",
			para1: "The main object of SpotLet is to be a marketplace or space aggregator that provides space reservation tools. In this way, users can upload spaces that are available, so that others can reserve them by the hour, after paying the price provided on the Web.",
			para2: "Thus, through the use of our platform, the user interested in such spaces or in offering them, allows SpotLet to act as a mediator in the transaction that is carried out. ",
			para3: "In this way, on the one hand, if you are interested in reserving a space for a certain time, among those offered on the Platform, you can do so easily. ",
			para4: "On the other hand, you can upload the spaces you want to offer for reservation to interested users, indicating the price and conditions of the reservation, as well as the extras you want. That is, SpotLet takes care of showing the available spaces on its platform and, as a User, you can upload yours so that others can reserve it or select the one that interests you to reserve it, always subject to availability and the indicated price.",
		},
		{
			heading: "Essential terms for a better understanding of these conditions",
			para1: "Platform: is the web page associated with these conditions and through which we facilitate contact between the host User and the guest User to carry out the transaction, as well as through which we present information of interest to the Page Users.",
			para2: "Transaction: is the operation carried out between the host User and the guest User through our platform, whereby one person -host- uploads a space for their reservation, and the other -guest- reserves it for film shooting, celebrate an act or event. It is also the operation by which both users contract our services.",
			para3: "Host user: is the user who provides their spaces (house, meeting rooms, terraces, sets...) on the SpotLet website for reservation. It can be any type of person or company that makes its spaces available for the guest User to use and, within this category or classification as a host user, there would also be one that uses the platform for complete management of its spaces. This user is identified as User Golden Host and upload spaces with a high frequency of reservations and at high prices; It can be hotel chains, restaurants or real estate. As well as Public Administrations and Universities (identified as Public Administration User) with exclusive spaces belonging to said institutions.",
			para4: "Guest user: is the person who reserves an available space on the Platform. Within this category, there may also be professionals or companies that reserve high-cost spaces with high frequency and that are identified as User Frequent Renter.",
			para5: "Registered User or Client: will be the User who registers on the website to be able to upload spaces and/or make reservations for them.",
			para6: "Visitor: it is the person who simply browses our website or platform.",
		},
		{
			heading: "Types of User and contracting of our services",
			para1: "The contracting of our services can be carried out by any natural or private person who wishes or needs it, as long as they hold the legal majority and have the legal capacity to act.If you register as a natural person (individual), these conditions and the provisions of the regulations regarding the defense and protection of consumers or users will apply in any case. If, on the other hand, you operate as a self-employed professional or company and register, these terms and conditions will apply to you.",
			para2: "You can register on our platform and operate indistinctly as a host or guest user.Therefore, these general conditions will apply to you, and the specific ones depending on whether you act as host or guest, when appropriate.",
		},
	];


	const registration = [
		{
			heading: "Reading and acceptance of the general conditions",
			para1: `General features: We inform you that in order to proceed to use certain functionalities of our platform or web page, it will be necessary to be adult and have previously registered following the instructions included therein, accessible through the "Register" option.`,
			para2: "User Registration: Before proceeding to contract our services, it is necessary to register as a registered User, indicating for this the required data, which will always be relevant, in accordance with the provisions of Digital Personal Data Protection Act, 2022.",
			para3: "If you authorize us at the time of registration, we can also send you, where appropriate, any offer, promotion or information that may be of interest to you.",
			para4: "From SpotLet we establish a personalized relationship with the Users to inform them of news or changes in the services, among others; situations that you accept by validating these conditions. ",
		},
		{
			heading: "Acceptance of the transaction and these conditions",
			para1: `The confirmation of the contracting of the services will be made through the activation of the button"I accept the terms and conditions”, which will appear before you definitively proceed to finalize the registration on our platform.`,
			para2: "Once you have completed all the mandatory fields required by our platform, the online registration procedure and once you have made use of the validation link that is included in the verification email sent by SpotLet and that you will receive at the email address that you has indicated, as a host or guest User enters into a contract with SpotLet.",
			para3: "These terms and conditions will be available at all times on the Web, in the section Terms and Conditions.",
			para4: "With this, you will be allowed to access and use the Website under the contracted conditions.",
		},
		{
			heading: "Responsibilities of the User at this time",
			para1: "(1) The User guarantees under his own responsibility the accuracy of the information provided, expressly exempting SpotLet from the consequences and damages that its inaccuracy may cause to third parties.",
			para2: "(2) The owner of this platform does not assume the obligation nor does it have the technical means to verify the identity of the Users who register on it. Therefore, the owner will not be responsible in any case when a case of usurpation of the User's identity occurs.",
			para3: "(3) Bearing this in mind, SpotLet reserves the right to reject any registration request whose content does not meet the purposes of this platform, so it is up to the User to ensure that the transaction they intend to carry out is in accordance with the purpose of this platform, as well as that it does not violate any of the registration rules that are required.",
			para4: "(4) The User's access code to our platform is completely personal and non-transferable, assigned solely and expressly by the User, who is responsible to SpotLet and third parties for the correct use and non-transmission or disclosure to third parties, individuals and /or legal entities that are not themselves or persons expressly empowered by them to contract on their behalf.",
			para5: "(5) In the event of any loss or theft of the access codes, unauthorized use of the Website or the codes, as well as any security breach of the same of which the User has become aware, the User will obliges to notify SpotLet of said incident immediately. In this case, the User will have the right to be given another password to access the website.",
		},
		{
			heading: "Meaning of acceptance of these conditions",
			para1: "The acceptance of these conditions means:",
			para2: "(1) That you can operate within the platform as a host and/or guest User and carry out the transactions that interest you, following the guidelines established in these conditions and in the Platform.",
			para3: "(2) That he undertakes to comply with these conditions and to respect them under his sole responsibility.",
			para4: `In addition, we inform you that, for legal reasons, we have the confirmation that you have made at the time of contracting our services by validating or "clicking" them at the time of registration and/or contracting, for which we are certain when you have accepted our conditions.`,
		},
		{
			heading: "Requirement for hiring: legal age",
			para1: "Warn you that in order to be a User and/or Client of our platform and use our services you must be at least of legal age",
			para2: "Since the Family Law Reform Act of 1969, the age of majority in the India is of 18 years of age, so any service contracted through this website must take place between people over 18 years of age.",
			para3: "Please, if you detect that a minor has contracted any of our services, tell us with as many details as possible and as soon as possible by sending an email to support@SpotLet.in.",
		},
	];


	const services = [
		{
			heading: "Mediation in space reservation transactions",
			para1: "As indicated in point 1.2, the main service that we offer from SpotLet, and the purpose of this platform, is to act as an intermediary and put the host User, who uploads and advertises a certain space, with the additional or extra services that wish, in contact with the potential guest User, who would reserve it.",
			para2: "As consideration for said action, SpotLet receives a commission for each reservation made (see point 4.1.1. for more details on the applicable conditions).",
		},
	];



	const prices = [
		{
			heading: "Mediation in space reservation transactions",
			para1: "The details about the price or commission that we apply to the transactions that are carried out through our platform are determined in the particular conditions of contracting, purchase summary, or in the detail of the contracting of the services that you can visualize prior acceptance and formalization, where the guest User will be able to see the details of the prices that will be applicable and that, at all times, will have been shown on our website.",
			para2: "The details about the price or commission that we apply to the transactions that are carried out through our platform are determined in the particular conditions of contracting, purchase summary, or in the detail of the contracting of the services that you can visualize prior acceptance and formalization, where the guest User will be able to see the details of the prices that will be applicable and that, at all times, will have been shown on our website.",
			para3: "Commission for reservations made",
			para4: "(a) General aspects",
			para5: "In this regard, by accepting these conditions, the Host User accepts that a commission of 14.5% will be applied, calculated based on the total price of the space uploaded, on the basis (before of applying taxes), and an additional commission of 5.5%, such as transaction management costs between both users (taxes apart).",
			para6: "That is, SpotLet will receive approximately a 19% as a commission and this amount or commission will be charged by your payment service provider. This amount will be charged to your account before the host User receives the payment made by the guest or end User who has reserved their space. ",
			para7: "For example, if the reservation of a space has a cost of Rs. 100.00/hour and a reservation is made for one hour, the total price will be Rs.100.00, to which is added the additional 5.5%, to guest's charge. SpotLet receives 14.5% of the Rs.100.00 and the additional 5.5% of the management costs, which is also received by the latter (SpotLet) in full.",
			para8: "At all times, after contracting the service, the user will know the cost of the reservation and the cost of managing the service that is charged from SpotLet.",
			para9: "(b) Specific conditions for certain types of users",
			para10: "As described in section 1.3., although there are guest and host Users, in general, within this classification, there are some users who present certain peculiarities and to whom specific commissions would be applied, described below:",
			para11: "User Club SpotLet: for those companies that frequently need to reserve spaces for their company (eg: shootings, events, product launches, etc.), due to the high volume of reservations that can be made, the applicable commission may be reduced from 5.5% (as transaction management costs) for Guest, to 0%.",
			para12: "User Golden Host: for this modality of host User, who will offer their spaces for reservation regularly and at high prices, taking into account the characteristics of the spaces (because they are hotels, restaurants...), SpotLet will receive a commission from 10%, instead of the usual one of 14.5%.",
			para13: "User Public Administration or institution: finally, for this type of host User, SpotLet will not receive, because it is not applicable, the commission of 14.5%, but simply the commission of 5.5% attributable to the Guest as reservation management costs.",
			para14: "The specific commission that will apply to these specific assumptions and users will appear prior to formalization and acceptance of the Service, in the purchase summary.",
		},
		{
			heading: "Additional services",
			para1: "The host User may offer additional services to the space offered (eg: tables, speakers, cleaning service, catering, etc.). The quantities and prices of these extra services will appear in the pertinent sections at the time the space is reserved by the Guest, and will be added to the final price, which can be seen in the payment details before proceeding. the effective reservation of space.",
			para2: "SpotLet is not responsible for the specific conditions associated with these specific services that, although, in general, will appear published on our platform. Users must be aware that, among themselves, they must negotiate the corresponding particular or specific conditions and that SpotLet is not responsible for any conflict, doubt, responsibility that may arise from said provision of additional services, being responsible, in terms of the provision of the service, the host User and the guest User of the fulfillment of their obligations and rules of conduct, as the case may be.",
		},
		{
			heading: "Reserve for additional time",
			para1: "If the guest User wishes to reserve for an additional time once the event or act for which he reserved the Host's space is being held, he must contact the Host using the contact information provided to request that additional time, if possible. ",
			para2: "SpotLet reserves the right to make said charge unilaterally, if confirmation of the additional time is received by both parties.",
		},
		{
			heading: "Bail",
			para1: "The Host User may establish in his advertisement that a deposit will be required. The deposit operates as the maximum amount that can be deducted for breaches and / or damages of the guest and his companions.",
			para2: `If you would like to claim the guest for the damages caused by him during his stay, you must notify SpotLet of such incidents, by sending an email to support@SpotLet.in, saying "Request deposit", with the corresponding reservation number, within a period not exceeding 48 hours from the end of the event and, in any case, before your space can be reserved again or a new event begins in it. Under no circumstances will claims submitted outside said period be addressed, nor through a means or channel other than the one described in this paragraph.`,
			para3: "In the claim, the facts that motivate it must be stated, being an essential requirement to provide the 'Reservation Details', as well as the evidence considered pertinent for the resolution of the claim file. If the fact that motivates the retention of the deposit cannot be accredited with the corresponding evidence or, simply, a list of facts is made and the necessary evidence for the resolution of the case is not accompanied, SpotLet reserves the possibility of not attending the claim. . To this end, the opinions or value judgments issued by the applicant will not be taken into account when resolving the aforementioned controversy. The following will be considered as objective facts for the deduction of the deposit:",
			para4: "– Damage to the property or belongings of the host. For this, it will be necessary to provide an invoice for the broken element or the new one that replaces it, expressly mentioning the brand and model, which must be of the same type and quality. If this is not the case and the new item is of superior quality, the deposit will be withheld for the amount of the cheapest item.",
			para5: "– How many other breaches have been agreed in the announcement of the platform and/or in the 'Reservation Details' that were susceptible to total or partial withdrawal of the deposit.",
			para6: "- Non-compliance of the guest User in the departure time. For this it will be necessary to specify in the 'Reservation Details' (Check-out) the departure time of the guests and how to calculate the deduction of the proportional part of the deposit for the delay in the departure of the guest and his companions.",
			para7: "- Excess capacity of people: it must be specified in the 'Reservation Details' the amount that will be deducted from the deposit for this aspect for each additional guest. In addition, the host, in his claim, must prove undoubtedly by the evidence it deems appropriate such excess capacity.",
			para8: "– Extra services provided by the host.",
			para9: "In the event that the total or partial withdrawal of the deposit is necessary, it will be carried out in an exclusive order. In this way, the last three reasons described in the previous points, that is, the non-compliance of the guest in the departure time (the one who prolongs his stay in the capacity for certain fractions of time), the excess of capacity (additional companions to those agreed in the 'Reservation Details') and the extra services that the host could provide may be proportionally reduced or reduced –or even totally eliminated– if the total amount of the deposit is necessary to attend to the claims covered by damage or damage. in the property and belongings of the host, as well as those produced in the community elements and, in general, those other breaches of regulations stipulated in the announcement and/or in the 'Reservation Details'.",
			para10: " At the time of deduction of the deposit, the pertinent deductions will be applied in their order and with an eliminatory character in such a way that, if one of them reaches the maximum amount of the deposit, the application or deduction of the following reasons will be excluded.",
			para11: "Those claims from hosts who claim that guests used the deposit as a credit in favour of cases in which the guest tacitly prolongs the time agreed in the reservation, introduces additional companions and/or has to do with extra services provided by the host, will carry a penalty of a 20% to the host for management expenses incurred by SpotLet. To deal with such a claim, it will be mandatory, as in the rest of the cases, that the corresponding 'Reservation Details' be attached to it.",
			para12: "The platform will carry out the corresponding inquiries and, where appropriate, will proceed to the effective retention of all of it in favour of the host or, of the necessary part to cover the damages produced.",
			para13: "If it is not possible for SpotLet to clarify the reasons for the claim, the deposit will be returned to the guest.",
			para14: "The following behaviours or damages are excluded from claims against SpotLet:",
			para15: "– Matters not stipulated in the 'Reservation Details'.",
			para16: "– Those related to noise, odours, smoke and gas emissions, vibrations and, ultimately, any other type of emission.",
			para17: "– On the elements that are outside the spatial scope of the place object of the reservation that had not been included on purpose in the 'Reservation Details'.",
			para18: "– Damage to third parties, such as neighbours, pedestrians or vehicles located on the street. In particular, those caused in the assets of the community of neighbours (elevators, stairs, decorative elements, portal, etc.) and those that occur on public roads, pedestrians or vehicles as a result of throwing objects from the terrace or similar behaviours that, also, produce damages in the referred elements.",
		},
		{
			heading: "Applicable taxes and additional expenses",
			para1: "Price and applicable taxes for the services established in the previous point",
			para2: "SpotLet will apply to the services and amounts established the GST that applies at all times according to the law and the relevant withholding, where appropriate.",
		},
	];


	const conditions = [
		{
			heading: "Conditions applicable to the services described in the previous section ",
			para1: "Right to modify the applicable commissions",
			para2: "SpotLet reserves the right to modify the commission percentage applied to reservations specified in section 4.1.",
			para3: "In the above cases, the User will be notified of the variation at least FIFTEEN (15) days in advance.",
			para4: "If within a period of TEN (10) days from the receipt of our notification, the Host User has not notified either his acceptance or his disagreement, it will be understood that he accepts the new conditions. ",
			para5: "If you do not agree, you can also unsubscribe from our services according to the procedure provided for this in these conditions.",
		},
		{
			heading: "Requirements for the announcement of a space to be published ",
			para1: "SpotLet will publish the spaces through this platform, provided that the ads meet the following conditions:",
			para2: "•	The images must be horizontal and correspond to the advertised spaces, have sufficient quality; they cannot contain a watermark, or personal or contact information.",
			para3: "•	The images must be well focused, that is, they must be seen well; not pixelated and have adequate lighting.",
			para4: "For all these reasons, SpotLet reserves the right to retouch the image for a better fulfilment of its purpose, a fact that the Host User accepts by accepting these conditions.",
		},
		{
			heading: "Conditions applicable to the Platform",
			para1: "Exclusions",
			para2: "It is expressly stated that SpotLet does not sell, buy or lease the spaces displayed on the Web. By virtue of this, in no case does SpotLet guarantee the quality of the service or space that a host User offers on the Platform.",
			para3: "(1) Final price of the transaction.",
			para4: "The final price of the transaction will be indicated in the transaction form before making the payment by the guest User. ",
			para5: "It is expressly stated that SpotLet does not sell, buy or lease the spaces displayed on the Web. By virtue of this, in no case does SpotLet guarantee the quality of the service or space that a host User offers on the Platform.",
			para6: "(2) Conditions of the reserved space.",
			para7: "SpotLet does not act as an effective provider in relation to the spaces, but rather as an intermediary, presenting on the Web the spaces uploaded by the different host Users and those extras that they wish to provide to the Guests together with their spaces. In this sense, it is only responsible for the consequences derived from what is expressly exposed and reported on our platform in accordance with the conditions in this or other legal notices applicable to it; not of the service associated with the rental of the space or the services offered, the conditions found therein, nor the conditions related to the use of the space, among others. All the details about the operation, use, conditions of the space... are agreed between the Host User and the Guest. ",
			para8: "(3) Territory where we offer the service.",
			para9: "SpotLet operates in India.",
			para10: "(4) Cancellation.",
			para11: "SpotLet cannot and does not intend to guarantee reservations if the host User decides to cancel due to force majeure or fortuitous events that prevent their use, impossibility of access, or for judicial and/or administrative reasons. In this case, SpotLet will do everything possible to find an alternative solution to the space, location and planned capacity. ",
		},
	];


	const use = [
		{
			heading: "Prior to the use of the platform",
			para1: "Prior to using the platform, in case of doubt or to raise what they consider pertinent, the Guest can contact us through the relevant contact form, in which case, if necessary, we would contact the Host if the matter was related to a space to reserve.",
		},
		{
			heading: "What steps must be carried out through the Platform?",
			para1: "Applicable to both Users",
			para2: "(1) Once you access our platform, in the upper right part of it you will see the “Register” section; fill in the form with the data required, read the terms and click on the box as you have read and understood to accept these Conditions.",
			para3: "(2) Next, from SpotLet we will send an e-mail to the contact e-mail you have indicated in the form so that you can validate the registration by “clicking” again on the attached link.",
			para4: "(3) Finally, you will be able to access our platform and start using it. Again, we will send you a second e-mail through which we will confirm that you have been registered on the Platform.",
			para5: "(4) In addition, you will also have the option to register by connecting your Google or Facebook accounts to SpotLet. ",
		},
		{
			heading: "Host user",
			para1: "The Host User can operate and visit our website by following the steps explained below.First of all, you must register and accept these terms and conditions, and then fill in all the fields related to the information about your space: location, how to get there, descriptive information about the space and its photos, availability hours, cancellation policy , if applicable and available activities.",
			para2: "Once you request to upload your space to SpotLet, you must fill in the rest of the information requested to finish verifying your data. ",
			para3: "From SpotLet we will check the information provided and, if it is valid and meets the requirements of the Platform, we will proceed to upload your space. ",
		},
		{
			heading: "Guest user",
			para1: "For his part, the guest User, if he is interested in reserving a space, can search in our particular browser, located at the top of the Web, the activity he wishes to carry out, the day, and the hours in which he wants to reserve a space.",
			para2: "From SpotLet we will provide you with the precise information you are looking for based on the search factors you have entered. We also highlight certain spaces on our main page.",
			para3: `Once you select the desired space, you can click on "Immediate reservation" to carry out the appropriate transaction and reserve it, proceeding to the indicated payment.`,
			para4: "You will receive a reservation confirmation email, with the price, date and time. ",
			para5: "From SpotLet we will check the information provided and, if it is valid and meets the requirements of the Platform, we will proceed to upload your space. ",
		},
		{
			heading: "Service cancellations ",
			para1: "You can unsubscribe from the platform at any time, except in cases where there is a pending transaction or payment, in which case, you can contact us by email. support@SpotLet.in so that we can proceed to unsubscribe and/or check the status.",
			para2: "In this way, if the cancellation could not be carried out immediately, we would notify you, as well as what are the steps or the process that must be taken into account.",
		},
	];


	const method = [
		{
			heading: " Possible forms of payment for our services",
			para1: "SpotLet accepts Razor pay / STRIPE as a payment method, a platform that provides management and payment processing services. Payment management by Razor pay / STRIPE is subject to its own terms and conditions.",
			para2: "Also, as stated in our Privacy Policy, it is necessary for us to send some of your data to Razor pay / STRIPE in order to process the payment for the reservation of spaces, authorizing us to carry out this data sharing.",
			para3: "In the same way, from SpotLet we can change the supplier for the management of your payments, of which you will be notified sufficiently in advance, according to the provisions contained in these terms and conditions.",
		},
		{
			heading: "Security measures applicable to forms of payment",
			para1: "SpotLet applies the security measures of the Razor pay / STRIPE payment service regulated in its Web page.",
		},
	];


	const particular = [
		{
			para1: "In addition to what is indicated in these terms and conditions, there may be some conditions that vary depending on the type of transaction you carry out through our platform, such as, for example, the commission for our services that will be associated with the value of the transaction you carry out.",
			para2: "The possible particular conditions that may exist will be informed to you throughout the process of contracting the services and prior to their acceptance, so that you can see the specific conditions that regulate these aspects.",
			para3: "You must also take into account the particular conditions of the space you rent or reserve for the time you reserve it. SpotLet can show the particular conditions provided by the guest User; but is not responsible for its accuracy, rights and duties established for the use of said space, between guest User and host User, in which case, the parties are subject to what is expressly agreed and, in case of non-compliance, each of them will respond. the parties based on what is established in said agreement between parties, exonerating SpotLet from any responsibility in this regard. ",
		},
	];


	const duties = [
		{
			heading: "Host User Duties ",
			para1: "(1) The Host must have sufficient power, and be able to prove it with the documentation required by SpotLet, to make the spaces to be reserved available to the Platform and its guest Users, either as owners, lessors or sub-lessors, or to have of the pertinent express authorization to be able to upload a space, as well as to carry out the transaction. ",
			para2: "(2) It is up to the host User to indicate the reservation conditions of the spaces that they have uploaded to the Platform, at the time of incorporating them. You agree to specify all the data that is required, as well as to upload photos of the space and reservation conditions.",
			para3: "(3) The Host must respect the legal and commercial guarantees, and the recognized right of withdrawal, when applicable.",
			para4: "(4) With the reservation of the space and its corresponding acceptance by the guest User, the latter assumes, in relation to the Guest, all the obligations derived from a contract for the provision of services. ",
			para4: "(5) The Host must provide the Guest User with the possibility of exercising their rights of access, rectification, deletion, opposition, portability and limitation in the processing of their personal data, and the Host User must respond to the Guest for any personal data that could be treated and the adoption of the corresponding security measures in compliance with the provisions of the data protection regulations in force at any time.",
			para4: "(6) It is the duty and responsibility of the Host to be up to date with their tax and fiscal obligations, as well as those obligations derived from the lease of the space, exonerating SpotLet from any responsibility or infraction in this regard. ",
		},
		{
			heading: "Duties of the Guest User",
			para1: "(1) The guest User undertakes to pay the agreed price for the reservation of the space, all with due diligence and contractual good faith.",
			para2: "(2) The Guest understands that the spaces may not be exactly the same as the photos shown on the Platform, so there may be minor variations that must be assumed, if applicable.",
			para3: "(3) The guest User undertakes to make good use of the reserved spaces and to respect them, as well as to comply with the specified reservation conditions, such as schedules, existing rules for the use of the space and good use of the materials, among others. , committing to pay the Host the price of any material damage that occurs during the act or event that is the object of the space.",
			para4: "(4) The guest User undertakes not to violate any of the conditions that are applicable to them by virtue of the provisions of these terms or in the rest of the legal notices applicable to this platform. ",
		},
		{
			heading: "Obligations of both Users",
			para1: "(1) In order to access the service, you must necessarily have computer equipment, with the necessary programs and configurations for the proper functioning of the Website and with an Internet connection. The expenses related to the connection will be borne exclusively by the User.",
			para2: "(2) Users are obliged to make good use of the Platform and to use it properly, that is, for the purposes for which it has been created, taking into account that the applicable commissions represent the main income of the owner company.",
			para3: "(3) Both Users undertake to respect all the provisions of this text and, especially, the provisions of section 13 regarding our Code of Conduct.",
		},
	];


	const general = [
		{
			para1: "(1) The incorporation of spaces subject to reservation to SpotLet is equivalent to a declaration of ownership and/or the right to be able to lease it, if you are not the owner. SpotLet reserves the right to ask the Host at any time, if deemed appropriate, for the necessary documentation proving the above.",
			para2: "(2) SpotLet reserves the right to eliminate texts that refer to contact data or information that does not correspond to a correct description of the space. SpotLet will contact the Host to report this circumstance and give them the opportunity to rectify the advertisement to adapt it to the established conditions.",
			para3: "(3) SpotLet will be empowered to modify at any time and without prior notice the image of this platform (design, image, presentation and configuration or operation), as well as its content and the functionalities included in it, being able to eliminate, modify, add new or subjecting some aspects to specific conditions, without implying alteration of the agreements or the relationship between SpotLet and the User.",
			para4: "(4) In order to obtain the best effectiveness of the Web, SpotLet may deny or restrict access to Users who do not respect these conditions, without the need for prior notification.",
			para5: "(5) Without prejudice to these conditions, SpotLet may establish certain particular conditions, which will be mandatory for access and use of some of the services offered by the Page.",
			para6: "(6) In addition to these conditions, for the access and use of this platform, the rest of the legal texts indicated in these conditions must be respected.",
			para7: "(7) SpotLet reserves the right to modify or interrupt, in whole or in part, access to the system temporarily, when the system requires it for maintenance, updating or repair. To the extent possible, we will notify our Users of this type of situation sufficiently in advance.",
		},
	];


	const responsibility = [
		{
			para1: "As a Client, the User undertakes to make a lawful use of our services, without contravening current legislation, or harming the rights and interests of third parties.",
			para2: "Likewise, it guarantees the veracity and accuracy of the data provided when filling in the contract forms, avoiding the creation of damages to SpotLet or other Users, as a consequence of their incorrectness.",
			para3: "You will also be responsible for respecting the conditions and form or execution of the service detailed in the applicable particular conditions, as the case may be, as well as in our community standards or code of conduct.",
			para4: "Similarly, Users will be responsible for material and personal damage caused in the space and during the reservation of these, as long as it is directly or indirectly attributable to conduct that is not due to fortuitous events or force majeure, in relation to its role in space; that is, the Host will be responsible and liable, to the extent permitted by law, for damages due to the conditions of the space and its availability to the Guest and other users who use it. On the contrary, the Guest will be responsible for those damages produced during the hours of reservation of the space.",
			para5: "Failure to comply with any of these conditions may lead to the withdrawal or cancellation of the services by SpotLet, without the need to notify you in advance and without entitling you to any compensation period.",
		},
	];


	const glimitations = [
		{
			para1: "(1) In no case SpotLet will be responsible for the quality of the spaces offered that are the object of the reservations made, since it only mediates or puts both parties in contact.",
			para2: "(2) SpotLet does not control the timeliness, veracity or accuracy of each of the data published by Users on our platform, therefore, in no case, will it be responsible for information that is not exact, truthful, not current or any other derived from an error from the source from which that information was extracted. ",
			para3: "Thus, by way of example and not exhaustively, SpotLet will not be responsible in any case in the event of:",
			para4: "•	Errors or confusion related to names, data or information derived from errors in the pages or original sources from which they were extracted or consulted by the Users who later use them. SpotLet to carry out the appropriate transaction..",
			para5: "•	Lack of detailed information about a certain space that depends on the criteria or data of the person who offered it for the reservation.",
			para6: "•	Misuse or abuse by the User of the information obtained from our services, such as misinterpretations of it, or misinterpretations or misuse of information extracted from another platform.",
			para7: "•	Damages or losses that have occurred as a result of the use of the information extracted from our services, the information provided by the host Users or third-party platforms.",
			para8: "(3) In the event that SpotLet receives a claim from third parties based on rights of ownership or lease of the space, it will address this claim stating that it obtained the appropriate statement to display the space in question on the Web, and that it acted in good faith without will of harming the legitimate holders of the rights.",
			para9: "In this case, SpotLet will inform the host User of the claim.  ",
			para10: "After assessing the claim received, SpotLet may temporarily or permanently suspend the presentation on the platform of the space in question or the Host, depending on the type of infraction that could be incurred and notifying the affected party of it. ",
			para11: "In any case, SpotLet will be exempt from any liability arising from this class of claims since it is the Host who uploads the space and who assumes the responsibility of being able to do so, in accordance with the applicable laws, and it is he who must respond to this types of situations or actions.",
		},
	];


	const code = [
		{
			heading: "Users who can use the Platform",
			para1: "All Users of the website must be persons with legal capacity who have reached the age of majority.",
			para2: "The correct behaviour of the Users is essential for the proper functioning of the service. Below is the code of conduct that they must have to access and use the Web, expressly indicating that compliance with what is described below is an essential condition for its use.",
		},
		{
			heading: "General duties common to all Users",
			para1: "(1) The Users declare under their sole responsibility that they will act in compliance with the applicable regulations, in a responsible, respectful, diligent manner and with total good faith.",
			para2: "(2) The Host guarantees that the spaces that it uploads and that can be the object of agreement with other Users do not violate or infringe the rights of third parties.",
			para3: "(3) In the event that the User has access to confidential information, he undertakes to use it exclusively for the purposes for which it was disclosed, always respecting said confidentiality.",
			para4: "(4) In the event that Users detect any anomaly or malfunction of the platform or services offered by SpotLet, the User may notify the following email: support@SpotLet.in",
			para5: "(5) Regarding the use or publication, where appropriate, of content by Users, they will undertake to respect the following rules or regulations:",
			para6: "•	Respect the rights of the owner of the Platform and the rights of third parties related to intellectual and industrial property, described in the Legal Notice.",
			para7: "•	Have the corresponding authorization in case of publishing images or content of third parties.",
			para8: "•	Respond for damages caused to third parties due to the violation of property and lease rights and keep SpotLet harmless at all times.",
			para9: "•	Comply with each of the rules and procedures established in this document and in the Legal Notice.",
			para10: "•	Respect the rights of third parties and other Users registered on the SpotLet platform.",
			para11: "(6) In the event that it is the Users themselves who can comment on the Platform, they must respect, not only the intellectual property rights and image of third parties or SpotLet, but also make their comments or contributions ensuring the right to respect of others.",
		},
		{
			heading: "Conduct prohibited for all Users",
			para1: "The User is expressly prohibited from the conduct described below:",
			para2: "(1) The User cannot register and use the Website without having sufficient capacity to do so.",
			para3: "(2) The User may not create false identities, act on behalf of third parties without sufficient power or legitimacy and/or impersonate the identity of others, in the same way as the illegal use of data. In this sense, in no case may the services be used to access or seek access to the accounts of other Users; penetrate, or attempt to penetrate, the security measures of SpotLet, the software or hardware of another entity, the electronic communications system, or the telecommunications system.",
			para4: "(3) The introduction of false data is not allowed, and your data must be completely accurate and truthful.",
			para5: "(4) The User may not be untrue, falsify documents, signatures, infringe applicable laws, regulations or regulations. In particular, the platform cannot be used for purposes related to child pornography, child abuse, mistreatment, affecting minors, their families and/or third parties.",
			para6: "(5) The User may not violate the rules and predetermined processes for access and use of the Platform or use methods that may cause damage to it or to third-party systems.",
			para7: "(6) The User may not use the Website for purposes other than their own.",
			para8: "(7) It is not allowed to contact other Users of the Page as well as to dispose of the data provided by them for purposes other than those established in these conditions, and in the particular ones that may regulate access to services offered through the Web.",
			para9: "(8) Chain letters and/or unsolicited advertising cannot be sent, unless the express consent of the recipient is obtained.",
			para10: "(9) Not The transmission through the Website of information is not allowed, nor is it allowed to market material, products or services of any type or nature that is illegal, libellous, defamatory, harmful, vulgar, obscene or in any other objectionable way. In this sense, language, content and graphics that are disrespectful and that affect the rights of our other Clients and/or Users and/or third parties cannot be used either.",
			para11: "(10) You may not transmit any material that harasses another user and/or third parties.",
			para12: "(11) It is not allowed to transmit any type of material (by e-mail, forums, comments) that threatens, encourages bodily harm or destruction of property or person.",
			para13: "(12) The SpotLet platform may not be used to transmit any content that is considered adult or pornographic, such as explicit sex scenes, full nudity, etc.",
			para14: "(13) It is not allowed to transmit the insertion of messages or commercial advertisements, without complying with legal requirements and/or that is considered spam and/or conduct spamming (sending spam or unsolicited messages).",
			para15: "(14) It is forbidden to use material that violates and/or affects the intellectual and industrial property rights of our Clients and/or third parties (trademarks, trade names, slogans, photographs, content...). Above all this, the User must avoid publishing all the material that belongs to third parties and that is registered as intellectual and/or industrial property, without having the proper authorization of its owner or having ensured that when using it, it has or has the corresponding license for it.",
			para16: "(15) Our platform may not be used to collect, or attempt to collect, personal information about third parties without their knowledge or consent and/or without compliance with applicable personal data protection regulations and legislation. ",
			para17: "(16) In no case can activities be carried out through or from our platform that affect the capacity of people or systems, including the denial of service (DOS) attack against another main computer of the network or individual User.",
			para18: "(17) It is prohibited to carry out deceptive activities with the purpose that the person who receives it acts on them or from them, causing them harm.",
			para19: "(18) It is forbidden to carry out any other action for illicit purposes and/or that are harmful or violate the rights of third parties and/or SpotLet (among them: right to honour, honour, integrity of the person, good name...) and/ or constitutes a crime or criminal offense.",
			para20: "(19) Nor can the Platform be used for the propagation of hate speech and/or prejudice against minorities, advocacy of crime and/or violation of human rights.",
			para21: "(20) In the photos of the spaces uploaded by the Hosts, personal or contact data (names, surnames...) cannot be included; the photo of the space and the possible extras that the Host can offer are simply accepted. Failure to comply with this point will result in the deletion and, therefore, elimination of the Host's profile on the Platform. ",
			para22: "(21) All communications between the guest User and the host must be made using the internal chat specifically enabled on the Platform. However, it is not allowed for both Users to share contact data through the chat, beyond those that may be provided for the proper functioning of the Platform at the time of registration.",
		},
		{
			heading: "Conduct on the part of SpotLet",
			para1: "Duties of SpotLet",
			para2: "(1) SpotLet undertakes to treat the Users' data following the rules of confidentiality and privacy established in these conditions and in the provisions of the applicable regulations, in particular, the provisions of the Digital personal data protection act 2022.",
			para3: "(2) SpotLet undertakes to attend to the Users in the requests, doubts or claims they have, following the procedures for contact or presentation of requests or claims established in the set of our legal policies.",
			para4: "(3) SpotLet works so that the website and the services offered through the platform work correctly and safely.",
			para5: "Rights of SpotLet",
			para6: "(1) In no case, SpotLet will be obliged to guarantee the quality of the space offered, this being the responsibility of the Host.",
			para7: "(2) SpotLet, at its own discretion, may terminate access to the Website, immediately, and without the need for prior notice, to the User who does not behave properly under these terms and conditions.",
			para8: "(3) From SpotLet We reserve the right to remove any comments or reviews with inappropriate or prohibited content as provided in these terms and conditions and applicable law.",
		},
	];


	const delivery = [
		{
			heading: "Conditions of delivery of the services offered by this platform for the host Users",
			para1: "The delivery of the services offered through this platform will be understood to be carried out by making the contracted services available. In this way, as a general rule, all publication of spaces will be made and, therefore, delivered to the host User, always being subject to the content of these conditions and the legal texts that complement them. ",
		},
		{
			heading: "Product delivery conditions for the guest User",
			para1: "The delivery of the service contracted by the Guest, that is, the reservation of a space, will be understood to have been made on the day and hours in which this User has made the reservation.",
			para2: "SpotLet is not responsible in any case for the conflicts that may arise from said delivery, and the host User must be responsible for it and therefore, the guest User must address it to make any claim in this regard. However, as indicated in these conditions, we also offer ourselves as mediators, so if you have any problems, you can contact us and we will help you as much as possible.",
		},
	];


	const reservation = [
		{
			heading: "Cancellation and return",
			para1: "At SpotLet we understand that each space is different and that a single cancellation policy does not fit all reservation circumstances. That is why we provide a spectrum of options so that Hosts can choose and select, at the time of registering on the Platform, the policy that works best for their space. Hosts must choose one of the following cancellation policies.",
		},
		{
			heading: "Cancellation modalities",
			para1: "Very flexible: Guests can cancel their reservation up to 24 hours before the event start time and will receive a full refund (excluding processing fees) of their reservation price. Reservation cancellations submitted less than 24 hours prior to event start time are non-refundable.",
			para2: "Flexible: Guests can cancel their reservation up to 7 days prior to the event start time and will receive a full refund (excluding processing costs) of your reserve price. Guests can cancel their reservation between 7 days and 24 hours before the event start time and receive a 50% refund (excluding processing costs) of their reservation price. Reservation cancellations submitted less than 24 hours prior to event start time are non-refundable. ",
			para3: "Standard 30 days: Guests may cancel their reservation up to 30 days prior to the event start time and will receive a full refund (excluding processing costs) of your reserve price. Guests can cancel their reservation between 30 days and 7 days prior to the event start time and receive a 50% refund (excluding processing fees) of their reservation price. Cancellations submitted less than 7 days prior to event start time are non-refundable.",
			para4: "Standard 90 days: Guests can cancel their reservation up to 90 days prior to the event start time and will receive a full refund (excluding processing costs) of your reserve price. Guests can cancel their reservation between 90 days and 14 days before the event start time and receive a refund of the 50% (excluding processing costs) of your reserve price. Cancellations submitted less than 14 days prior to event start time are non-refundable. ",
		},
		{
			heading: "Cancellation Grace Period",
			para1: "All bookings are subject to SpotLet' grace period policy, which provides a full refund for bookings cancelled within 24 hours of booking confirmation, as long as the event is no less than 48 hours away.",
		},
		{
			heading: "Cancellation Confirmation",
			para1: "A reservation is only officially cancelled once the Guest has received confirmation of the cancellation from SpotLet.",
			para2: "Host payments will vary based on the specific cancellation policy chosen by the Host and other circumstances. If SpotLet, in its sole discretion, based on the applicable cancellation policy, determines that a Guest is entitled to a refund, the Host's payment will be calculated by deducting from the booking subtotal price, any SpotLet commission or concierge fees. , and then reduce that amount by the percentage specified in the applicable cancellation policy. Cleaning fees refunded to guests will not be paid to hosts. Payments are usually made within 3-7 days of confirmation of cancellation.",
		},
		{
			heading: "Cleaning fees",
			para1: "Cleaning fees, if any, would be fully refunded to Guests if reservation cancellation is confirmed prior to using the space.",
		},
		{
			heading: "Host Plugins",
			para1: "Host add-ons are subject to the same cancellation policy as the space. ",
		},
		{
			heading: "Multi-day reservations",
			para1: "For multi-day and non-consecutive day reservations, the cancellation deadline set forth in the applicable cancellation policy will apply to the start time of the event for each day the space is reserved.",
		},
		{
			heading: "Calculation of cancellation terms",
			para1: "All cancellation periods are calculated based on local space time.",
		},
		{
			heading: "Host Cancellations",
			para1: "Cancellations initiated by the Host will be fully refunded to the Guest (including Fees paid). The Host who cancels the reservation will be responsible for any losses incurred by SpotLet or the Guest associated with any cancellation, and all payments scheduled for that reservation will be cancelled.",
		},
		{
			heading: "Host cancellation fees",
			para1: "The Host User will be responsible for the costs, expenses and other losses, and will be subject to certain penalties if you make unjustified cancellations, such as:",
			para2: "•	Assume travel costs of Guests.",
			para3: "•	A fine of more than Rs.10000.00 or 15% of the total price of the reservation.",
			para4: "•	Remove the Host's space from the Platform if you cancel multiple reservations",
			para5: "SpotLet may, but is not required to, waive costs, expenses and penalties for Host-initiated cancellations if the following circumstances occur:",
			para6: "•	SpotLet determines that a reservation was accidentally accepted by a Host, provided that the Host cancels within 2 hours of the reservation confirmation.",
			para7: "•	A Guest provides false or misleading information in a reservation request that affects the reservation made.",
			para8: "SpotLet may, but is not required to, waive costs, expenses and penalties for Host-initiated cancellations if the following circumstances occur:",
			para9: "•	A Guest uses, or intends to use, a space in a manner inconsistent with the description of the space, the reservation conditions or other limitations agreed between the Guest and the Host.",
			para10: "•	Inappropriate or illegal activity that takes place during an event.",
			para11: "•	A Host and a Guest who mutually decide to cancel the reservation.",
			para11: "•	Any justified cancellation.",
			para11: "In these cases, SpotLet may take measures to minimize the risks for its business model, being able to warn the user who commits this type of action and being able to reserve the right not to provide services again if any of the aforementioned circumstances occur. ",
		},
		{
			heading: "Justified cancellations",
			para1: "SpotLet may allow a Host or Guest to cancel a confirmed reservation due to certain circumstances, and may require Hosts or Guests to provide evidence to support this type of cancellation.",
			para2: "The following circumstances may be considered grounds for a justified cancellation:",
			para3: "•	Unexpected death or serious illness of a Host, Guest or immediate family member of any of them.",
			para4: "•	Serious injury that directly restricts a Guest's ability to travel or a Host's ability to provide the reserved space.",
			para5: "•	Acts of God or force majeure.",
			para6: "•	Urgent travel restrictions or severe security warnings issued after booking by an appropriate government office or agency.",
			para7: "•	Severe property damage or unforeseen maintenance issues that directly affect the safe use of the space; either",
			para8: "•	Judicial or administrative order that directly restricts the use or access to a space.",
		},
		{
			heading: "Cancellations initiated by SpotLet",
			para1: "SpotLet may decide, in its sole discretion, that it is necessary or appropriate to cancel a confirmed reservation. SpotLet may cancel a reservation at any time prior to the event start time and issue a full or partial refund to a Guest. ",
			para2: "When SpotLet initiates a cancellation, any refund or payment will vary depending on the circumstances giving rise to the cancellation. Neither SpotLet nor any of the other parties to the cancelled reservation shall have any responsibility or liability for such cancellations initiated by SpotLet. For example, by:",
			para3: "•	A justified cancellation.",
			para4: "•	The removal of a Host or space from the Platform before the start time.",
			para5: "•	Any actual or potential illegal or unauthorized activity.",
			para6: "•	Risk of damage or safety issues.",
			para7: "•	Any violation of the Code of Conduct.",
		},
		{
			heading: "Reservation rescheduling",
			para1: "When approved by SpotLet a Guest or Host may have the opportunity to reschedule a reservation. Any rescheduled reservation must be:",
			para2: "•	For the same duration as the original reservation, prior approval of the Host",
			para3: "•	Confirmed before the start time the initial reservation.",
			para4: "•	Rescheduled for a time within 90 days of the initial start time.",
			para5: "•	Only rescheduled once.",
			para6: "Rescheduled reservations are non-refundable once confirmed. Any successive rescheduling attempt or successful failure to reschedule a reservation within the above conditions will result in cancellation of the reservation, subject to the cancellation conditions set out in these terms and conditions. Rescheduling by Guests may result in additional charges for the SpotLet service.",
		},
		{
			heading: "Guest Initiated Cancellations",
			para1: "Guests will receive a full refund if they cancel a reservation within 48 hours of the Host's confirmation of the reservation, provided that the cancellation is made no later than 1 week before the scheduled start time of the reservation. Otherwise, Guests will incur a cancellation charge that includes SpotLet' management costs and a portion of the reservation price. All cancellations must be submitted through the Platform to be considered effective as follows:",
			para2: "Refunds to Guests will be applied after the cancellation is complete. Payments to Hosts will be made within 7 days of the start time of the cancelled reservation. ",
			para3: "When Guests cancel a portion of a multi-day reservation, fees and refunds will only apply to the specific dates cancelled. Guests can update a reservation time without penalty when a host accepts the new time.",
		},
		{
			heading: "Right of withdrawal",
			para1: "Host user",
			para2: "SpotLet informs the Host User that the right of withdrawal contemplated by the legislation relating to consumers and users does not apply to them if they operate as a company or professional, and therefore cannot withdraw from contracting our services once they have been contracted. ",
			para3: "In the event that you operate as an individual, you will have the right to terminate the contracting of our services within a period of 14 calendar days from when you contracted them and unless the term for the provision of the service or rental of your space is in a shorter period. or that the contracted service occurs on a recurring basis and 14 calendar days have already elapsed since contracting.",
			para4: "guest user",
			para5: "The guest User will have the right to withdraw from the contracted services during the 14 calendar days following the contracting of the services, as long as the use of the reserved space was not within these following 14 days since it will be understood that it fits within the foreseen in article 103 letter l of the Law for the Defence of consumers and users.",
		},
	];


	const applicable = [
		{
			para1: "In case of discrepancy between the text of these conditions and any translation thereof, the English version shall prevail in all cases. In the case of discrepancies between the English version of the general conditions and their possible translations, the English version will prevail.",
		},
	];


	const intellectual = [
		{
			para1: "All rights to the content published on our website relating to the services we offer are protected by copyright and trademarks.",
			para2: "In this sense, the articles, contents, images or logos are the property of SpotLet or of persons or companies that have expressly authorized their publication; or that they are subject to licenses that allow us to make an appropriate and appropriate use of these materials.",
			para3: "In general, the reproduction, transformation, distribution, public communication or making available of the contents of this website without the written consent of SpotLet is expressly prohibited.",
			para4: "Any partial or total reproduction of the content through any procedure and on any medium is subject to prior and express authorization from SpotLet, with the limitations and qualifications already contemplated in our intellectual property policy, contained in the Legal Notice of our platform.",
		},
	];


	const data = [
		{
			para1: "The personal data that you must provide us with is essential for the provision of the service that we offer through this platform. By registering on the page, you agree to provide us with valid data, data that allow the provision of the service by SpotLet and the correct identification as a registered User; as well as sending information and advertising that SpotLet may believe may be of interest to you.",
			para2: "The purposes of data processing will be, in detail, the following:",
			para3: "•	Provision and billing of services.",
			para4: "•	Notification of promotional agreements that SpotLet may have entered into with collaborating companies to offer Web Users certain products and services. Although, this information will be provided only by SpotLet and not by third parties. ",
			para5: "•	Inform you of activities that we think may be of interest to you.",
			para6: "•	Respond to queries or requests for information that you may make. ",
			para7: "•	Allow access to the options that require registration and/or additional validation, in which case the User must comply with the particular conditions that are established, where appropriate.",
			para8: "•	Send the statistics of the platform and the ads of each seller User, individually, on a quarterly basis.",
			para9: "At any time and/or when you deem it convenient, you can make use of your rights of Access, Rectification, Deletion, Opposition, Portability, Forgetting and Limitation in the treatment by writing to the contact email that we have enabled for it: support@SpotLet.in, or by sending us a request by physical mail to #405, Aparna Greens Apartment, Opp: Golf View Apartments, Nanakramguda, Hyderabad – 32, Telangana, India.",
			para10: "enclosing, in both cases, a copy of the passport or your DNI (data holder) and expressly indicating in the subject the request you wish to make: access, rectification, deletion, opposition, portability, forgetfulness or limitation in the treatment .",
		},
	];


	const modification = [
		{
			para1: "SpotLet reserves the right to modify, at any time and without prior notice, the presentation and configuration of the Website, as well as the General Conditions of Contract.",
			para2: "As a User, you will always have these conditions in a visible place, freely accessible for as many queries as you wish to make. In this sense, you must carefully read them each time you access our website. In any case, the acceptance of these conditions will be a previous and essential step to contracting any available service.",
		},
	];


	const appli = [
		{
			para1: "In the event that any conflict or discrepancy arises in the interpretation of these conditions or notice, the Courts and Tribunals that, where appropriate, will hear the matter, will be those established by the applicable legal regulations in matters of competent jurisdiction. In any case, if your situation is as a final consumer, the courts corresponding to your domicile will be competent.",
			para2: "In the case of legal entities, the parties will be subject to the courts of Hyderabad, Telangana, India.",
		},
	];
	
	

	return (
		<div>
			<Navbar extraNavId="id-2" />
			<div className="text-only-container">
				<div className="text-only-main-heading">Terms & Conditions</div>
				<br />
				<div style={{fontSize: "22px"}}><strong>SCOPE AND PURPOSE OF THE PRESENT CONDITIONS</strong></div>
				{scope.map((item, index) => (
					<div key={index} className="text-only-item">
						<div className="text-only-heading" style={{fontSize: "18px", marginTop: "2%"}}>{`${index + 1}.  ${
							item.heading
						}`}</div>
						{item.para1 && (
							<div className="text-only-info">{item.para1}</div>
						)}
						{item.para2 && (
							<div className="text-only-info">{item.para2}</div>
						)}
						{item.para3 && (
							<div className="text-only-info">{item.para3}</div>
						)}
						{item.para4 && (
							<div className="text-only-info">{item.para4}</div>
						)}
						{item.para5 && (
							<div className="text-only-info">{item.para5}</div>
						)}
						{item.para6 && (
							<div className="text-only-info">{item.para6}</div>
						)}
						{item.para7 && (
							<div className="text-only-info">{item.para7}</div>
						)}
						{item.para8 && (
							<div className="text-only-info">{item.para8}</div>
						)}
					</div>
				))}

				<br />
				<br />
				<br />
				<div style={{fontSize: "22px"}}><strong>REGISTRATION PROCEDURE AND ACCEPTANCE OF THE CONDITIONS</strong></div>
				{registration.map((item, index) => (
					<div key={index} className="text-only-item">
						<div className="text-only-heading" style={{fontSize: "18px", marginTop: "2%"}}>{`${index + 1}.  ${
							item.heading
						}`}</div>
						{item.para1 && (
							<div className="text-only-info">{item.para1}</div>
						)}
						{item.para2 && (
							<div className="text-only-info">{item.para2}</div>
						)}
						{item.para3 && (
							<div className="text-only-info">{item.para3}</div>
						)}
						{item.para4 && (
							<div className="text-only-info">{item.para4}</div>
						)}
						{item.para5 && (
							<div className="text-only-info">{item.para5}</div>
						)}
					</div>
				))}

				<br />
				<br />
				<br />
				<div style={{fontSize: "22px"}}><strong>SERVICES WE OFFER</strong></div>
				{services.map((item, index) => (
					<div key={index} className="text-only-item">
						<div className="text-only-heading" style={{fontSize: "18px", marginTop: "2%"}}>{`${index + 1}.  ${
							item.heading
						}`}</div>
						{item.para1 && (
							<div className="text-only-info">{item.para1}</div>
						)}
						{item.para2 && (
							<div className="text-only-info">{item.para2}</div>
						)}
					</div>
				))}

				<br />
				<br />
				<br />
				<div style={{fontSize: "22px"}}><strong>PRICES OF CONTRACTED SERVICES</strong></div>
				{prices.map((item, index) => (
					<div key={index} className="text-only-item">
						<div className="text-only-heading" style={{fontSize: "18px", marginTop: "2%"}}>{`${index + 1}.  ${
							item.heading
						}`}</div>
						{item.para1 && (
							<div className="text-only-info">{item.para1}</div>
						)}
						{item.para2 && (
							<div className="text-only-info">{item.para2}</div>
						)}
						{item.para3 && (
							<div className="text-only-info">{item.para3}</div>
						)}
						{item.para4 && (
							<div className="text-only-info">{item.para4}</div>
						)}
						{item.para5 && (
							<div className="text-only-info">{item.para5}</div>
						)}
						{item.para6 && (
							<div className="text-only-info">{item.para6}</div>
						)}
						{item.para7 && (
							<div className="text-only-info">{item.para7}</div>
						)}
						{item.para8 && (
							<div className="text-only-info">{item.para8}</div>
						)}
						{item.para9 && (
							<div className="text-only-info">{item.para9}</div>
						)}
						{item.para10 && (
							<div className="text-only-info">{item.para10}</div>
						)}
						{item.para11 && (
							<div className="text-only-info">{item.para11}</div>
						)}
						{item.para12 && (
							<div className="text-only-info">{item.para12}</div>
						)}
						{item.para13 && (
							<div className="text-only-info">{item.para13}</div>
						)}
						{item.para14 && (
							<div className="text-only-info">{item.para14}</div>
						)}
						{item.para15 && (
							<div className="text-only-info">{item.para15}</div>
						)}
						{item.para16 && (
							<div className="text-only-info">{item.para16}</div>
						)}
						{item.para17 && (
							<div className="text-only-info">{item.para17}</div>
						)}
						{item.para18 && (
							<div className="text-only-info">{item.para18}</div>
						)}
					</div>
				))}

				<br />
				<br />
				<br />
				<div style={{fontSize: "22px"}}><strong>CONDITIONS APPLICABLE TO CONTRACTED SERVICES </strong></div>
				{conditions.map((item, index) => (
					<div key={index} className="text-only-item">
						<div className="text-only-heading" style={{fontSize: "18px", marginTop: "2%"}}>{`${index + 1}.  ${
							item.heading
						}`}</div>
						{item.para1 && (
							<div className="text-only-info">{item.para1}</div>
						)}
						{item.para2 && (
							<div className="text-only-info">{item.para2}</div>
						)}
						{item.para3 && (
							<div className="text-only-info">{item.para3}</div>
						)}
						{item.para4 && (
							<div className="text-only-info">{item.para4}</div>
						)}
						{item.para5 && (
							<div className="text-only-info">{item.para5}</div>
						)}
						{item.para6 && (
							<div className="text-only-info">{item.para6}</div>
						)}
						{item.para7 && (
							<div className="text-only-info">{item.para7}</div>
						)}
						{item.para8 && (
							<div className="text-only-info">{item.para8}</div>
						)}
						{item.para9 && (
							<div className="text-only-info">{item.para9}</div>
						)}
						{item.para10 && (
							<div className="text-only-info">{item.para10}</div>
						)}
						{item.para11 && (
							<div className="text-only-info">{item.para11}</div>
						)}
					</div>
				))}

				<br />
				<br />
				<br />
				<div style={{fontSize: "22px"}}><strong>USE AND OPERATION OF THE PLATFORM</strong></div>
				{use.map((item, index) => (
					<div key={index} className="text-only-item">
						<div className="text-only-heading" style={{fontSize: "18px", marginTop: "2%"}}>{`${index + 1}.  ${
							item.heading
						}`}</div>
						{item.para1 && (
							<div className="text-only-info">{item.para1}</div>
						)}
						{item.para2 && (
							<div className="text-only-info">{item.para2}</div>
						)}
						{item.para3 && (
							<div className="text-only-info">{item.para3}</div>
						)}
						{item.para4 && (
							<div className="text-only-info">{item.para4}</div>
						)}
						{item.para5 && (
							<div className="text-only-info">{item.para5}</div>
						)}
					</div>
				))}

				<br />
				<br />
				<br />
				<div style={{fontSize: "22px"}}><strong>METHOD OF PAYMENT</strong></div>
				{method.map((item, index) => (
					<div key={index} className="text-only-item">
						<div className="text-only-heading" style={{fontSize: "18px", marginTop: "2%"}}>{`${index + 1}.  ${
							item.heading
						}`}</div>
						{item.para1 && (
							<div className="text-only-info">{item.para1}</div>
						)}
						{item.para2 && (
							<div className="text-only-info">{item.para2}</div>
						)}
						{item.para3 && (
							<div className="text-only-info">{item.para3}</div>
						)}
					</div>
				))}

				<br />
				<br />
				<br />
				<div style={{fontSize: "22px"}}><strong>PARTICULAR CONDITIONS</strong></div>
				{particular.map((item, index) => (
					<div key={index} className="text-only-item">
						{item.para1 && (
							<div className="text-only-info">{item.para1}</div>
						)}
						{item.para2 && (
							<div className="text-only-info">{item.para2}</div>
						)}
						{item.para3 && (
							<div className="text-only-info">{item.para3}</div>
						)}
					</div>
				))}

				<br />
				<br />
				<br />
				<div style={{fontSize: "22px"}}><strong>DUTIES AND OBLIGATIONS OF USERS</strong></div>
				{duties.map((item, index) => (
					<div key={index} className="text-only-item">
						<div className="text-only-heading" style={{fontSize: "18px", marginTop: "2%"}}>{`${index + 1}.  ${
							item.heading
						}`}</div>
						{item.para1 && (
							<div className="text-only-info">{item.para1}</div>
						)}
						{item.para2 && (
							<div className="text-only-info">{item.para2}</div>
						)}
						{item.para3 && (
							<div className="text-only-info">{item.para3}</div>
						)}
					</div>
				))}

				<br />
				<br />
				<br />
				<div style={{fontSize: "22px"}}><strong>GENERAL RIGHTS OF SPOTLET</strong></div>
				{general.map((item, index) => (
					<div key={index} className="text-only-item">
						{item.para1 && (
							<div className="text-only-info">{item.para1}</div>
						)}
						{item.para2 && (
							<div className="text-only-info">{item.para2}</div>
						)}
						{item.para3 && (
							<div className="text-only-info">{item.para3}</div>
						)}
						{item.para4 && (
							<div className="text-only-info">{item.para4}</div>
						)}
						{item.para5 && (
							<div className="text-only-info">{item.para5}</div>
						)}
						{item.para6 && (
							<div className="text-only-info">{item.para6}</div>
						)}
						{item.para7 && (
							<div className="text-only-info">{item.para7}</div>
						)}
					</div>
				))}

				<br />
				<br />
				<br />
				<div style={{fontSize: "22px"}}><strong>GENERAL RESPONSIBILITIES OF USERS</strong></div>
				{responsibility.map((item, index) => (
					<div key={index} className="text-only-item">
						{item.para1 && (
							<div className="text-only-info">{item.para1}</div>
						)}
						{item.para2 && (
							<div className="text-only-info">{item.para2}</div>
						)}
						{item.para3 && (
							<div className="text-only-info">{item.para3}</div>
						)}
						{item.para4 && (
							<div className="text-only-info">{item.para4}</div>
						)}
						{item.para5 && (
							<div className="text-only-info">{item.para5}</div>
						)}
					</div>
				))}

				<br />
				<br />
				<br />
				<div style={{fontSize: "22px"}}><strong>GLIMITATIONS AND EXEMPTIONS TO THE LIABILITY OF SPOTLET</strong></div>
				{glimitations.map((item, index) => (
					<div key={index} className="text-only-item">
						{item.para1 && (
							<div className="text-only-info">{item.para1}</div>
						)}
						{item.para2 && (
							<div className="text-only-info">{item.para2}</div>
						)}
						{item.para3 && (
							<div className="text-only-info">{item.para3}</div>
						)}
						{item.para4 && (
							<div className="text-only-info">{item.para4}</div>
						)}
						{item.para5 && (
							<div className="text-only-info">{item.para5}</div>
						)}
						{item.para6 && (
							<div className="text-only-info">{item.para6}</div>
						)}
						{item.para7 && (
							<div className="text-only-info">{item.para7}</div>
						)}
						{item.para8 && (
							<div className="text-only-info">{item.para8}</div>
						)}
						{item.para9 && (
							<div className="text-only-info">{item.para9}</div>
						)}
						{item.para10 && (
							<div className="text-only-info">{item.para10}</div>
						)}
						{item.para11 && (
							<div className="text-only-info">{item.para11}</div>
						)}
					</div>
				))}

				<br />
				<br />
				<br />
				<div style={{fontSize: "22px"}}><strong>CODE OF CONDUCT</strong></div>
				{code.map((item, index) => (
					<div key={index} className="text-only-item">
						{item.para1 && (
							<div className="text-only-info">{item.para1}</div>
						)}
						{item.para2 && (
							<div className="text-only-info">{item.para2}</div>
						)}
						{item.para3 && (
							<div className="text-only-info">{item.para3}</div>
						)}
						{item.para4 && (
							<div className="text-only-info">{item.para4}</div>
						)}
						{item.para5 && (
							<div className="text-only-info">{item.para5}</div>
						)}
						{item.para6 && (
							<div className="text-only-info">{item.para6}</div>
						)}
						{item.para7 && (
							<div className="text-only-info">{item.para7}</div>
						)}
						{item.para8 && (
							<div className="text-only-info">{item.para8}</div>
						)}
						{item.para9 && (
							<div className="text-only-info">{item.para9}</div>
						)}
						{item.para10 && (
							<div className="text-only-info">{item.para10}</div>
						)}
						{item.para11 && (
							<div className="text-only-info">{item.para11}</div>
						)}
						{item.para12 && (
							<div className="text-only-info">{item.para12}</div>
						)}
						{item.para13 && (
							<div className="text-only-info">{item.para13}</div>
						)}
						{item.para14 && (
							<div className="text-only-info">{item.para14}</div>
						)}
						{item.para15 && (
							<div className="text-only-info">{item.para15}</div>
						)}
						{item.para16 && (
							<div className="text-only-info">{item.para16}</div>
						)}
						{item.para17 && (
							<div className="text-only-info">{item.para17}</div>
						)}
						{item.para18 && (
							<div className="text-only-info">{item.para18}</div>
						)}
						{item.para19 && (
							<div className="text-only-info">{item.para19}</div>
						)}
						{item.para20 && (
							<div className="text-only-info">{item.para20}</div>
						)}
						{item.para21 && (
							<div className="text-only-info">{item.para21}</div>
						)}
						{item.para22 && (
							<div className="text-only-info">{item.para22}</div>
						)}
						
				<br />
				<br />
				<br />
				<div style={{fontSize: "22px"}}><strong>DELIVERY CONDITIONS</strong></div>
				{delivery.map((item, index) => (
					<div key={index} className="text-only-item">
						{item.para1 && (
							<div className="text-only-info">{item.para1}</div>
						)}
						{item.para2 && (
							<div className="text-only-info">{item.para2}</div>
						)}
					</div>
				))}
						
				<br />
				<br />
				<br />
				<div style={{fontSize: "22px"}}><strong>RESERVATION CANCELLATION POLICY</strong></div>
				{reservation.map((item, index) => (
					<div key={index} className="text-only-item">
						{item.para1 && (
							<div className="text-only-info">{item.para1}</div>
						)}
						{item.para2 && (
							<div className="text-only-info">{item.para2}</div>
						)}
						{item.para3 && (
							<div className="text-only-info">{item.para3}</div>
						)}
						{item.para4 && (
							<div className="text-only-info">{item.para4}</div>
						)}
						{item.para5 && (
							<div className="text-only-info">{item.para5}</div>
						)}
						{item.para6 && (
							<div className="text-only-info">{item.para6}</div>
						)}
						{item.para7 && (
							<div className="text-only-info">{item.para7}</div>
						)}
						{item.para8 && (
							<div className="text-only-info">{item.para8}</div>
						)}
						{item.para9 && (
							<div className="text-only-info">{item.para9}</div>
						)}
						{item.para10 && (
							<div className="text-only-info">{item.para10}</div>
						)}
						{item.para11 && (
							<div className="text-only-info">{item.para11}</div>
						)}
					</div>
				))}
						
				<br />
				<br />
				<br />
				<div style={{fontSize: "22px"}}><strong>APPLICABLE LANGUAGE</strong></div>
				{applicable.map((item, index) => (
					<div key={index} className="text-only-item">
						{item.para1 && (
							<div className="text-only-info">{item.para1}</div>
						)}
					</div>
				))}
						
				<br />
				<br />
				<br />
				<div style={{fontSize: "22px"}}><strong>INTELLECTUAL AND INDUSTRIAL PROPERTY</strong></div>
				{intellectual.map((item, index) => (
					<div key={index} className="text-only-item">
						{item.para1 && (
							<div className="text-only-info">{item.para1}</div>
						)}
						{item.para2 && (
							<div className="text-only-info">{item.para2}</div>
						)}
						{item.para3 && (
							<div className="text-only-info">{item.para3}</div>
						)}
						{item.para4 && (
							<div className="text-only-info">{item.para4}</div>
						)}
					</div>
				))}
						
				<br />
				<br />
				<br />
				<div style={{fontSize: "22px"}}><strong>INTELLECTUAL AND INDUSTRIAL PROPERTY</strong></div>
				{data.map((item, index) => (
					<div key={index} className="text-only-item">
						{item.para1 && (
							<div className="text-only-info">{item.para1}</div>
						)}
						{item.para2 && (
							<div className="text-only-info">{item.para2}</div>
						)}
						{item.para3 && (
							<div className="text-only-info">{item.para3}</div>
						)}
						{item.para4 && (
							<div className="text-only-info">{item.para4}</div>
						)}
						{item.para5 && (
							<div className="text-only-info">{item.para5}</div>
						)}
						{item.para6 && (
							<div className="text-only-info">{item.para6}</div>
						)}
						{item.para7 && (
							<div className="text-only-info">{item.para7}</div>
						)}
						{item.para8 && (
							<div className="text-only-info">{item.para8}</div>
						)}
						{item.para9 && (
							<div className="text-only-info">{item.para9}</div>
						)}
						{item.para10 && (
							<div className="text-only-info">{item.para10}</div>
						)}
					</div>
				))}
						
				<br />
				<br />
				<br />
				<div style={{fontSize: "22px"}}><strong>MODIFICATION OF CONDITIONS</strong></div>
				{modification.map((item, index) => (
					<div key={index} className="text-only-item">
						{item.para1 && (
							<div className="text-only-info">{item.para1}</div>
						)}
						{item.para2 && (
							<div className="text-only-info">{item.para2}</div>
						)}
					</div>
				))}
						
				<br />
				<br />
				<br />
				<div style={{fontSize: "22px"}}><strong>APPLICABLE JURISDICTION</strong></div>
				{appli.map((item, index) => (
					<div key={index} className="text-only-item">
						{item.para1 && (
							<div className="text-only-info">{item.para1}</div>
						)}
						{item.para2 && (
							<div className="text-only-info">{item.para2}</div>
						)}
					</div>
				))}
					</div>
				))}
			</div>
			<Footer />
		</div>
	);
};

export default TermsofService;
