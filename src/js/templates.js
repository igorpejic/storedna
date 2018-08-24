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

    <p>This document is to be developed jointly by StoreDNA leadership to be used as the integral policy describing company's culture and values. StoreDNA manifesto is based on ActionBoard manifesto, which describes the beliefs and values of how StoreDNA designs, produces and delivers its core product. </p>

    <h3>PURPOSE BEYOND SELF</h3>

    <p>We believe that the ultimate perfection of the collective is bound to constant care and challenging one another to deliver flawless results. We care about other's progress and growth. We always strive to look at every situation from the point of the viewer, where we first think and act for the purpose of the others. While this exercise is the hardest one, we strive to train and act upon this belief in every situation. </p>

    <h3>DESIGN SYSTEMS WHICH ENCOURAGE GROWTH</h3>

    <p>Every StoreDNA team member has the ability to function in complete isolation, creating his/her calendar, priorities and missions. Every member invests a lot of energy in self-perfection, aligning his/her skills with the future focus of the company. Company's vision is set up jointly and every person has the obligation to protect, hone and perfect the joint vision. </p>

    <p>We believe that growth is the combination of self-discipline and well thought support system which enables, encourages, and motivates the collective and individual to strive for the betterment of oneself and the company at the whole. If we are building a feature for the ActionBoard, or sales presentation for the prospect, or a new process for our company we always think of this supporting pillar: designing to induce growth and encourage all proprietors to be bolder in fulfilling our mission. </p>

    <h3>YOU CAN NOT SHAPE A DIAMOND WITHOUT FRICTION</h3>

    <p>StoreDNA believes in perfection, craftsmanship and rigor when developing and delivering its products. While it is increasingly difficult to produce highest quality at all times, StoreDNA teams enter rigorous feedback sessions where a producer (a person who has created an original document, code, presentation...) is challenged by its peers. This process involves hammering the unshaped diamond and can cause friction in the relationships. We use this principle to remind ourselves that this process makes everybody better and later we can bounce back faster to comradeship. </p>

    <h3>INSINCERITY IS WEAKNESS. DON'T BE WEAK.</h3>

    <p>Sincerity and transparency lie at the core of all StoreDNA inter-personal communications.
    Without clear and honest communication the team starts to disband and individuals start to follow separate paths.
    Keeping silent about important matters is equally as bad as lying. The written form is preferred when communicating information of high importance.</p>

    <h3>TEN WINNING TRAITS OF STOREDNA'S TEAM MEMBER</h3>

    <p>While it is almost impossible to attain all 10 traits at the same time, StoreDNA believes in the following strengths:</p>

    <ol>
    <li><strong>Winning Self-esteem</strong> (Who you see, is who you'll be). (S)he would have developed a strong belief in own strengths.</li>
    <li><strong>Targeted Expectancy</strong> (What you set, is what you get). (S)he is setting and believing in &quot;SMART&quot; goals.</li>
    <li><strong>Contagious Convictions</strong> (If you don't stand for something, you'll fall for anything). (S)he believes in own competencies and an integrity of &quot;saying what you mean and meaning what you say&quot; nature.</li>
    <li><strong>Enthusiastic Motivation</strong> (If you think you can - you can. If you think you can't - you can't). (S)he finds the drive and energy to make own beliefs come true.</li>
    <li><strong>Disciplined Self-regulation</strong> (Losers react, winners respond). (S)he is able to control own reactions and respond positively to any situation.</li>
    <li><strong>Unlimited Persistence</strong> (If it is to be, it is up to me). (S)he is able to overcome obstacles and reinforce the belief in own goals.</li>
    <li><strong>Positive Empathy</strong> (To have a friend, I must be a friend). (S)he is able to handle and develop relations with others - (s)he understands how someone may feel in advance and behaves accordingly.</li>
    <li><strong>Persuasive Communication</strong> (People buy people first). (S)he listens with an open mind and is able to send clear, persuasive messages which translate facts into emotions when it matters.</li>
    <li><strong>Creative Problem-solving</strong> (If you are not part of the solution, you are most likely part of the problem). (S)he is able to proactively handle problems and sees opportunity where most lost sight.</li>
    <li><strong>Dynamic Time-mastery</strong> (Before you can manage time you cannot manage anything else). (S)he takes control over life’s most perishable resource, time, while always finding a moment to talk to others.</li>
    </ol>
		<p className="t-center t-grey">By courtesy of John Evan-Jones and Torben Valsted</p>
	</div>

export const PurposeTemplate = () =>
<div className="template template--purpose">
  <h1>Purpose</h1>

  <h3>Mission / why do we exist</h3>

  <p>We exist to empower retailers to make more intelligent decisions resulting in better consumer satisfaction and conversion. We are growth addicts using our systems to inspire and lead the way for growth-conscious businesses. </p>

  <h3>Vision / desired end state</h3>

  <p>Humans make decisions based upon gut feeling and emotions. In some cases this creates excellence and prosperity. However, in many cases it fails due to cognitive biases in reasoning. We are creating a totally new level of thinking which will not replace but enhance human decision making by using real-time information converted in easy to use insights. </p>

  <p>StoreDNA strives to become world’s leader in driving informed and intelligent decisions in retail by using our AI agent who will empower and enhance retailer’s reasoning resulting in creating more efficient stores and seamless end-consumer experience. </p>

  <h3>Purpose / values, culture and inspiration</h3>

  <p>We, humans, live in spaces. When we started StoreDNA we found people were over-obsessed with analyzing online behavior. Think about how much time and money is spent on perfecting every click, every mouse hover, every multi-touch on your phone — but do we live in our cell phones?</p>

  <p>We, humans, live in two worlds, two spaces. First, there is the outer world of how things look like, everything envisioned by our eyes. But hidden from this view is an entirely different second world: the world of how. How different parts work together as the whole. It's a world we cannot perceive at first sight. This second world is harder to understand. It’s a world that can only be understood by how our brain perceives reality. This reality, which goes beyond how we see things, contains an answer to how things move and change. The division between “how/science” and “what/art” is integral to understanding every aspect of human life.</p>

  <p>At StoreDNA we are working hard to decode this world of how spaces and services actually influence human behavior. How can we shave of waiting times in queues? What if we could even remove queues altogether? How can we improve flow so that we can maneuver spaces as our ancestors walked in forests? How can we create spaces and services that enhance our thinking? </p>

  <p>Spaces that inspire — think human-friendly kindergartens, hospitals, working spaces. Even cities. Human- friendly citizenship. </p>

</div>

export const ContactTemplate = () =>
	<div className="template template--contact">
		<Contact />
	</div>

export const ManifestoTemplate = () =>
	<div className="template template--manifesto">
    <h1>ActionBoard Manifesto</h1>

    <p>This document outlines mission critical product vision details to be used as the core document to drive product development. ActionBoard is the most important part of StoreDNA organism, and Monolith’s future vision of supplementing all human decision making related to spacial intelligence. In order to succeed, all StoreDNA’s proprietors have to invest time, energy, and intelligence in ActionBoard’s improvements. </p>

    <p>ActionBoard - complete product along with computer vision algorithms, data ingestion algorithms, front-end user interface and state of the art help-desk system.</p>

    <h2>7 Principles of ActionBoard Design</h2>

    <p>At StoreDNA, we design systems which encourage growth. To achieve our mission we have to Design with:</p>

    <h3>1. Design with the mind in mind.</h3>

    <p>Cater to the user’s mindset. Think of core decisions the user has to make, cater to the user role. Write intelligently, find the way how to cross connect different functions. Design different experiences for different roles.</p>

    <h3>2. Design with Clarity.</h3>

    <p>Every visual cue has to be clear and color coded with StoreDNA palette. Messaging has to be clear and convey the high fidelity information within the smallest possible footprint. Build world-class help-desk and knowledge thesaurus.</p>

    <h3>3. Design with Consistency.</h3>

    <p>Unite marketing material with the product. Use the thesaurus and be consistent. Name modules in the same manner.</p>

    <h3>4. Design with Contrast.</h3>

    <p>Use contrast to illuminate key decisions. In Benchmark stores, use before and after in the more contrasting way.</p>

    <h3>5. Design with Growth at the core.</h3>

    <p>Nudge users to drive growth of their companies, by using a social proof feed. Remind every user of growth in all communications. </p>

    <h3>6. Design with Integrity.</h3>

    <p>At the core of what we do, we need to enable high level of precision when it comes to behavioral tracking sensors. Always upgrrade internal processes to check data integrity. </p>

    <h3>7. Design with Modesty.</h3>

    <p>ActionBoard should have the least amount of pixels which are able to convey the core message to the user. Should have the least amount of steps to act, enabling users to go from diagnostics to actions in fewer steps, making it more intuitive and easier to use.</p>
	</div>

export default renderTemplate
