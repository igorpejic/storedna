import React from 'react'

const renderTemplate = (template) => {
	switch (template) {
		case "our_dna": return ourDnaTemplate();
		default: return null;
	}
}

const ourDnaTemplate = () =>
	<div className="template template--ourDna">
		<h1>StoreDNA's DNA</h1>
		<h2>Company Manifesto</h2>
		<p>This document is to be developed jointly by StoreDNA leadership to be used as the integral policy describing company's culture and values. StoreDNA manifesto is based on ActionBoard manifesto, which describes the beliefs and values of how StoreDNA designs, produces and delivers it's core product. </p>
		<h3>PURPOSE BEYOND SELF</h3>
		<p>We believe that the ultimate perfection of the collective is bound to constant care and challenging one another to deliver flawless results. We care about other's progress and growth. We always strive to look at every situation from the point of viewer, where we first think and act for the purpose of the others. While this exercise is the hardest one, we strive to train and act upon this belief in every situation. </p>
		<h3>DESIGN SYSTEMS WHICH ENCOURAGE GROWTH</h3>
		<p>Every StoreDNA team member has the ability to function in complete isolation, creating his/her calendar, priorities and missions. Every member invests a lot of energy in self-perfection, aligning his/her skills with the future focus of the company. Company's vision is set up jointly and every person has the obligation to protect, hone and perfect the joint vision. </p>
		<p>We believe that growing is the combination of self-discipline and well thought support system which enables, encourages, and motivates the collective and individual to strive for betterment of oneself and the company at whole. If we are building a feature for the ActionBoard, or sales presentation for the prospect, or new process for our company we always think of this supporting pillar: designing to induce growth and encourage all proprietors to be more bold in fulfilling our mission. </p>
		<h3>YOU CAN NOT SHAPE A DIAMOND WITHOUT FRICTION</h3>
		<p>StoreDNA believes in perfection, craftsmanship and rigor when developing and delivering it's products. While it is increasingly difficult to produce highest quality at all times, StoreDNA teams enter rigorous feedback sessions where a producer (a person who has created an original document, code, presentation...) is challenged by its peers. This process involves hammering the unshaped diamond and can cause friction in the relationships. We use this principle to remind ourselves that this process makes everybody better and later we can bounce back faster to comradeship. </p>
		<h3>INSINCERITY IS WEAKNESS. DON't BE WEAK.</h3>
		<p>Sincerity and transparency lie at the core of all StoreDNA inter-personal communications.
		Without clear and honest communication the team starts to disband and individuals start to follow separate paths.
		Keeping silent about important matters is equally bad as lying. The written form is preferred when communicating information of high importance.</p>
		<h3>TEN WINNING TRAITS OF STOREDNA'S TEAM MEMBER</h3>
		<p>While it is almost impossible to attain all 10 traits at the same time, StoreDNA believes in the following strengths:</p>
		<ol>
		<li><strong>Winning Self-esteem</strong> (Who you see, is who you'll be). (S)he would have developed a strong belief in own strengths.</li>
		<li><strong>Targeted Expectancy</strong> (What you set, is what you get). (S)he is setting and believing in &quot;SMART&quot; goals.</li>
		<li><strong>Contagious Convictions</strong> (If you don't stand for something, you'll fall for anything). (S)he believes in own competencies and an integrity of &quot;saying what you mean and meaning what you say&quot; nature.</li>
		<li><strong>Enthusiastic Motivation</strong> (If you think you can - you can. If you think you can't - you can't). (S)he finds the drive and energy to make own beliefs come true.</li>
		<li><strong>Disciplined Self-regulation</strong> (Losers react, winners respond). (S)he is able to control own reactions and respond positively to any situation.</li>
		<li><strong>Unlimited Persistence</strong> (If it is to be, it is up to me). (S)he is able to overcome obstacles and reinforce the belief in own goals.</li>
		<li><strong>Positive Empathy</strong> (To have a friend, I must be a friend). (S)he is able to handle and develop relations to others - (s)he understands how someone may feel in advance and behaves accordingly.</li>
		<li><strong>Persuasive Communication</strong> (People buy people first). (S)he listens with an open mind and is able to send clear, persuasive messages which translate facts in to emotions when it matters.</li>
		<li><strong>Creative Problem-solving</strong> (If you are not part of the solution, you are most likely part of the problem). (S)he is able to proactively handle problems and sees opportunity where most lost sight.</li>
		<li><strong>Dynamic Time-mastery</strong> (Before you can manage time you cannot manage anything else). (S)he takes control over life’s most perishable resource, time, while always finding a moment to talk to others.</li>
		</ol>
	</div>

export default renderTemplate
