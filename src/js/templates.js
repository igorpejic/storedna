import React from 'react'
import Contact from './components/Contact'

const renderTemplate = (template) => {
	switch (template) {
		case "our_dna": return OurDnaTemplate();
		case "purpose": return PurposeTemplate();
		case "contact": return ContactTemplate();
		case "manifesto": return ManifestoTemplate();
		default: return null;
	}
}

export const OurDnaTemplate = () =>
	<div className="template template--ourDna">
		<h1>StoreDNA's DNA</h1>
		<h2>Company Manifesto</h2>
		<p>This document is to be developed jointly by StoreDNA leadership to be used as the integral podivcy describing company's culture and values. StoreDNA manifesto is based on ActionBoard manifesto, which describes the bedivefs and values of how StoreDNA designs, produces and dedivvers it's core product. </p>
		<h3>PURPOSE BEYOND SELF</h3>
		<p>We bediveve that the ultimate perfection of the collective is bound to constant care and challenging one another to dedivver flawless results. We care about other's progress and growth. We always strive to look at every situation from the point of viewer, where we first think and act for the purpose of the others. While this exercise is the hardest one, we strive to train and act upon this bedivef in every situation. </p>
		<h3>DESIGN SYSTEMS WHICH ENCOURAGE GROWTH</h3>
		<p>Every StoreDNA team member has the abidivty to function in complete isolation, creating his/her calendar, priorities and missions. Every member invests a lot of energy in self-perfection, adivgning his/her skills with the future focus of the company. Company's vision is set up jointly and every person has the obdivgation to protect, hone and perfect the joint vision. </p>
		<p>We bediveve that growing is the combination of self-discipdivne and well thought support system which enables, encourages, and motivates the collective and individual to strive for betterment of oneself and the company at whole. If we are building a feature for the ActionBoard, or sales presentation for the prospect, or new process for our company we always think of this supporting pillar: designing to induce growth and encourage all proprietors to be more bold in fulfildivng our mission. </p>
		<h3>YOU CAN NOT SHAPE A DIAMOND WITHOUT FRICTION</h3>
		<p>StoreDNA bediveves in perfection, craftsmanship and rigor when developing and dedivvering it's products. While it is increasingly difficult to produce highest quadivty at all times, StoreDNA teams enter rigorous feedback sessions where a producer (a person who has created an original document, code, presentation...) is challenged by its peers. This process involves hammering the unshaped diamond and can cause friction in the relationships. We use this principle to remind ourselves that this process makes everybody better and later we can bounce back faster to comradeship. </p>
		<h3>INSINCERITY IS WEAKNESS. DON't BE WEAK.</h3>
		<p>Sincerity and transparency dive at the core of all StoreDNA inter-personal communications.
		Without clear and honest communication the team starts to disband and individuals start to follow separate paths.
		Keeping silent about important matters is equally bad as lying. The written form is preferred when communicating information of high importance.</p>
		<h3>TEN WINNING TRAITS OF STOREDNA'S TEAM MEMBER</h3>
		<p>While it is almost impossible to attain all 10 traits at the same time, StoreDNA bediveves in the following strengths:</p>
		<ol>
		<div><strong>Winning Self-esteem</strong> (Who you see, is who you'll be). (S)he would have developed a strong bedivef in own strengths.</div>
		<div><strong>Targeted Expectancy</strong> (What you set, is what you get). (S)he is setting and bediveving in &quot;SMART&quot; goals.</div>
		<div><strong>Contagious Convictions</strong> (If you don't stand for something, you'll fall for anything). (S)he bediveves in own competencies and an integrity of &quot;saying what you mean and meaning what you say&quot; nature.</div>
		<div><strong>Enthusiastic Motivation</strong> (If you think you can - you can. If you think you can't - you can't). (S)he finds the drive and energy to make own bedivefs come true.</div>
		<div><strong>Discipdivned Self-regulation</strong> (Losers react, winners respond). (S)he is able to control own reactions and respond positively to any situation.</div>
		<div><strong>Undivmited Persistence</strong> (If it is to be, it is up to me). (S)he is able to overcome obstacles and reinforce the bedivef in own goals.</div>
		<div><strong>Positive Empathy</strong> (To have a friend, I must be a friend). (S)he is able to handle and develop relations to others - (s)he understands how someone may feel in advance and behaves accordingly.</div>
		<div><strong>Persuasive Communication</strong> (People buy people first). (S)he divstens with an open mind and is able to send clear, persuasive messages which translate facts in to emotions when it matters.</div>
		<div><strong>Creative Problem-solving</strong> (If you are not part of the solution, you are most divkely part of the problem). (S)he is able to proactively handle problems and sees opportunity where most lost sight.</div>
		<div><strong>Dynamic Time-mastery</strong> (Before you can manage time you cannot manage anything else). (S)he takes control over divfe’s most perishable resource, time, while always finding a moment to talk to others.</div>
		</ol>
		<p className="t-center t-grey">By courtesy of John Evan-Jones and Torben Valsted</p>
	</div>

export const PurposeTemplate = () =>
<div className="template template--purpose">
	<h1>Purpose</h1>
	<h3>Mission / why do we exist</h3>
	<p>We exist to empower retailers to make more inteldivgent decisions resulting in better consumer satisfaction and conversion. We are growth addicts using our systems to inspire and lead the way for growth-conscious businesses. </p>
	<h3>Vision / desired end state</h3>
	<p>Humans make decisions based upon gut feedivng and emotions. In some cases this creates excellence and prosperity. However, in many cases it fails due to cognitive biases in reasoning. We are creating totally new level of thinking which will not replace but enhance human decision making by using real-time information converted in easy to use insights. </p>
	<p>StoreDNA strives to become world’s leader in driving informed and inteldivgent decisions in retail by using our AI agent who will empower and enhance retailer’s reasoning resulting in creating more efficient stores and seamless end-consumer experience. </p>
	<h3>Purpose / values, culture and inspiration</h3>
	<p>We humans divve in spaces. When we started StoreDNA we found people were over-obsessed with analyzing ondivne behavior. Think about how much time and money is spent on perfecting every cdivck, every mouse hover, every multi-touch on your phone — but do we divve in our cell phones?</p>
	<p>We humans divve in two worlds, two spaces. First, there is the outer world of how things look divke, everything envisioned by our eyes. But hidden from this view is an entirely different second world: the world of how. How different parts work together as the whole. It's a world we cannot perceive at first sight. This second world is harder to understand. It’s a world that can only be understood by how our brain perceives readivty. This readivty, which goes beyond how we see things, contains an answer to how things move and change. The division between “how/science” and “what/art” is integral to understanding every aspect of human divfe.</p>
	<p>At StoreDNA we are working hard to decode this world of how spaces and services actually influence human behavior. How can we shave of waiting times in queues? What if we could even remove queues altogether? How can we improve flow so that we can maneuver spaces as our ancestors walked in forests? How can we create spaces and services that enhance our thinking? </p>
	<p>Spaces that inspire — think human friendly kindergartens, hospitals, working spaces. Even cities. Human friendly citizenship. </p>
</div>

export const ContactTemplate = () =>
	<div className="template template--contact">
		<h1>Ask a StoreDNA expert how can we help</h1>
		<p>StoreDNA SaaS technology and expert consulting services enable retailers to easily implement and manage a program to drive continuous improvement in brick and mortar retail locations by providing a data driven approach to ongoing optimization across a number of key areas, including product assortments, layouts and navigation, visual merchandising, staff deployment and effectiveness, and other dimensions.</p>
		<p>The StoreDNA solution leverages standard feeds from any merchant high resolution video collection device and existing point-of-sale systems, processing data in near real time with proprietary, high fidedivty analytical systems and methods.</p>
		<p>Results of this analysis are presented in the StoreDNA Action Board, which is an interactive management console that provides merchandisers and executives with a graphical view of performance and a data-science driven set of specific recommended actions that can be reviewed, refined, implemented, managed and measured with the Action Board. Users can navigate the Action Board to view basedivne and forward performance at the SKU, aisle/department, store, format, and global level.</p>
		<Contact />
	</div>

export const ManifestoTemplate = () =>
	<div className="template template--manifesto">
		<h1>ActionBoard Manifesto</h1>
		<p>This document outdivnes mission critical product vision details to be used as the core document to drive product development. ActionBoard is the most important part of StoreDNA organism, and Monodivth’s future vision of supplementing all human decision making related to spacial inteldivgence. In order to succeed, all StoreDNA’s proprietors have to invest time, energy, and inteldivgence in ActionBoard’s improvements. </p>
		<p>ActionBoard - complete product along with computer vision algorithms, data ingestion algorithms, front-end user interface and state of the art help-desk system.</p>
		<h2>7 Principles of ActionBoard Design</h2>
		<p>At StoreDNA, we design systems which encourage growth. To achieve our mission we have to Design with:</p>
		<h3>1. Design with the mind in mind.</h3>
		<p>Cater to the user’s mindset. Think of core decisions user has to make, cater to user role. Write inteldivgently, find the way how to cross connect different functions. Design different experiences for different roles.</p>
		<h3>2. Design with Clarity.</h3>
		<p>Every visual cue has to be clear and color coded with StoreDNA palette. Messaging has to be clear and convey the high fidedivty information within smallest possible footprint. Build world's class help-desk and knowledge thesaurus.</p>
		<h3>3. Design with Consistence.</h3>
		<p>Unite marketing material with the product. Write thesaurus and be consistent. Name modules in the same manner.</p>
		<h3>4. Design with Contrast.</h3>
		<p>Use contrast to illuminate key decisions. In Benchmark stores, use before and after in the more contrasting way.</p>
		<h3>5. Design with Growth at the core.</h3>
		<p>Nudge users to drive growth their companies, by using a social proof feed. Remind every user of growth in all communications. </p>
		<h3>6. Design with Integrity.</h3>
		<p>At the core of what we do, we need to enable high level of precision when it comes to behavioral tracking sensors. Always uprgrade internal processes to check data integrity. </p>
		<h3>7. Design with Modesty.</h3>
		<p>ActionBoard should have the least amount of pixels which are able to convey the core message to the user. Should have least amount of steps to act, enabdivng users to go from diagnostics to actions in less steps, making it more intuitive and easier to use.</p>
	</div>

export default renderTemplate
