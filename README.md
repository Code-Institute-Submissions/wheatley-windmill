<h1>Tour the Wheatley Windmill</h1>
<h3>Milestone Project 2 - Interactive Front-end Development</h3>
<p>A web page presenting a virtual tour of a windmill situated in a village near Oxford. 
Information about features of the mill are shown in boxes within the panoramas and in a simple quiz.</p>
<h2>External user's goal</h2>
<p>To explore and learn about the mill.</p>
<h2>Site owner's goal</h2>
<p>To provide a 'virtual' alternative to visiting the mill in person, which is not possible during the current situation.</p>
<h2>Features</h2>
<p>This project is composed of one page, although the windmill management team have expressed interest in redesigning their entire existing website.
On loading the page the user is notified how to get started with the tour.</p> 
<p>An accordion style menu gives options to visit any of six sections. Only one section is viewable at any one time.
When selected the section panoramas become visible, rotating by default to make it obvious that this is not a normal static photograph.
The user can control the orientatation and zoom using mouse/finger dragging or with the buttons shown.
The viewing position can be changed by selecting a direction arrow or via the menu at top left.
Buttons appear next to features of interest which when selected reveal more information.</p>
<p>Below the tours, the user is invited to test their knowledge about the mill.
These are ten simple questions with text input boxes and answer buttons.
When an answer is submitted, a relevant correct or incorrect message is returned to the user.</p>
<h2>Features for future development</h2>
<ul>
<li>Questions to be included within the tour windows.</li>
<li>Score to be kept for quiz.</li>
<li>Additional detail images to be added in information boxes.</li>
<li>Starting view orientation related to previous position.</li>
<li>Smarter direction arrows that adapt to view orientation.</li>
</ul>
<h2>Technologies used</h2>
<ul>
<li>HTML</li>
<li>CSS</li>
<li>JavaScript</li>
<li>Marzipano - for generating virtual tours</li>
<li>Ricoh Theta Z1 - 360 camera for creating panoramic images</li>
<li>Adobe Photoshop and Lightroom - for processing images</li>
<li>Google Fonts</li>
<li>Balsamiq Wireframes</li>
<li>Github</li>
<li>Gitpod</li>
</ul>
<h2>Planning and development</h2>
<p>For the initial wireframe file see <a href="https://github.com/Jegouar/wheatley-windmill/blob/2098a753531942a00848ecd5ca1f4c8d172c8b79/planning/Wheatley%20Windmill%20project%20wireframe.pdf">here.</a></p>
<p>Thanks must be given to Geoff Stephens and the team at Wheatley for allowing me to photograph the windmill and borrow the original drawing seen on the accordion.</p>
<p>After considering several packages, <a href="https://github.com/google/marzipano">Marzipano</a> was selected because of the need to customise the results.
Careful file editing, deletion of duplicates and rearrangement of folder structure was required before using the generated files.</p>
<h2>Testing</h2>
<p>Testing was carried out at each commit to Github. The following browsers were used on a Windows PC:
<ul>
<li>Google Chrome</li>
<li>Mozilla Firefox</li>
<li>Microsoft Edge</li>
<li>Opera</li>
<li>Internet Explorer</li>
</ul>
</p>
<p>Less frequent tests were also performed on an Android phone using Chrome and an iPhone and iMac using Safari.</p>
<p>The following checklist of features was tested in each case:</p>
Accordion<ul>
<li>Change of shade on section hover</li>
<li>Smooth transition on section selection</li>
<li>No multiple scene selection</li>
<li>Correct tour frame size and orientation for device used</li>
</ul>
Tours<ul>
<li>Correct panorama display</li>
<li>Correct control button display and functionality</li>
<li>Correct information button display and functionality</li>
</ul>
Questions<ul>
<li>Correct display and functionality of text input boxes</li>
<li>Correct display and functionality of answer submit button</li>
<li>Correct responses displayed when answers submitted</li>
</ul>
Overall<ul>
<li>Correct format and proportions of text and page elements for device and display size</li>
</ul>
<p>The only error recorded during testing was an incorrectly sized tour window frame, which was rectified.</p>
<p>A less scientific test was conducted using some older users not familiar with the technology being used here.
From this it was concluded that anybody can easily gain the full user experience without previous knowledge or additional instruction.</p>
<h2>Deployment</h2>
<p>This site is hosted using GitHub pages, deployed directly from the master branch with the page name index.html to deploy correctly. 
The deployed site will update automatically upon new commits to the master branch.