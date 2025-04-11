import React from 'react';
import BlogLayout from '../../components/BlogLayout';
import { Typography } from '@mui/material';

const RevivingApp = () => (
  <BlogLayout title="Technical Debt and Reviving a 4-Year-Old Application">
    <Typography variant="h5" gutterBottom>Background</Typography>
    <Typography paragraph>
      Four years ago, while still in university, I set out to build a social app called <strong>Spontaniius</strong>,
      hoping to take it to market. It was an ambitious project and a great learning experience, but life got in the way. 
      Shortly after launching, I moved from Vancouver to Montreal, started a new job, and eventually put the project on the 
      back burner—until it faded into the background.
    </Typography>
    <Typography paragraph>
      Now, four years later, I've decided to take another shot at reviving it. Here's what I've learned so far.
    </Typography>

    <Typography variant="h5" gutterBottom>Software Erodes</Typography>
    <Typography paragraph>
      If you leave an Android application untouched for four years, it <em>will</em> break.
    </Typography>
    <Typography component="ul" sx={{ pl: 4, mb: 2 }}>
      <li>Permissions that once worked? <strong>Deprecated.</strong></li>
      <li>Android namespace rules? <strong>Changed.</strong></li>
      <li>Plugins I relied on? <strong>No longer supported.</strong></li>
    </Typography>
    <Typography paragraph>
      The first few days felt like a scavenger hunt through broken dependencies and outdated frameworks.
    </Typography>

    <Typography variant="h5" gutterBottom>You Are the New Employee</Typography>
    <Typography paragraph>
      Having previously worked with unsupported legacy software, it's interesting to do the same with software 
      that you yourself wrote. Four years is a long time—so the ability to “just know” where things are is 
      <em>kind of gone</em>.
    </Typography>
    <Typography paragraph>
      As such, I found myself leaning on the same things one would hope for when working with legacy software: 
      <strong>structure and documentation.</strong>
    </Typography>
    <Typography paragraph>
      The structure of my application made bringing it back to life a bit more difficult. I developed this app with 
      some other students at a time when none of us had much professional experience building an Android application. 
      Monolithic architecture, hard coding, and poor navigation handling made reading the old code challenging.
    </Typography>
    <Typography paragraph>
      That said, it's nice to see how much I've grown over the last four years.
    </Typography>
    <Typography paragraph>
      One thing I was particularly <strong>grateful</strong> for, however, was documentation. My past self had kept things well documented, 
      which proved incredibly useful in figuring out how things originally worked. Even though the code itself wasn't ideal, 
      it was relatively easy to get a handle on existing APIs and database structures.
    </Typography>

    <Typography variant="h5" gutterBottom>Fixing vs. Rebuilding Code</Typography>
    <Typography paragraph>
      One of the biggest challenges in reviving an old project is deciding what to <strong>fix</strong> versus what to <strong>rebuild</strong>.
    </Typography>
    <Typography paragraph>
      With technical debt and loose ends everywhere, some components were simply too difficult to patch. More importantly, I knew 
      that maintaining the app in the future would be even harder if I only applied quick fixes rather than making fundamental improvements.
    </Typography>
    <Typography paragraph>
      So, rather than jumping straight into debugging, I took a <strong>step back to the architecture level</strong>. 
      I evaluated whether a fix was sustainable or if a rebuild was the better approach—and more often than not, I leaned toward rebuilding.
    </Typography>
    <Typography paragraph>This led to key improvements, including:</Typography>
    <Typography component="ul" sx={{ pl: 4, mb: 2 }}>
      <li><strong>Redesigning API endpoints</strong> for long-term sustainability</li>
      <li><strong>Refactoring into MVVM architecture</strong> for better performance and readability</li>
      <li><strong>Breaking down monolithic components</strong> to improve maintainability</li>
    </Typography>

    <Typography variant="h5" gutterBottom>The Joys of Automated Testing</Typography>
    <Typography paragraph>
      I've been writing automated tests for years, and it's always been rewarding to automate systems. 
      That said, the benefit can sometimes feel a bit abstract when writing tests against <em>functioning</em> code.
    </Typography>
    <Typography paragraph>
      Writing tests for my own app, however, provided a hands-on demonstration of why it matters.
    </Typography>
    <Typography paragraph>
      Given that I was making major structural changes on both the front and back end—often switching entire frameworks—each step 
      introduced a potential series of issues. This is where automated testing shined.
    </Typography>
    <Typography paragraph>
      By introducing test coverage, I was able to move much more quickly through various refactorings while having a safety net 
      to catch regressions. Instead of a chaotic debugging process, tests provided a structured, efficient workflow.
    </Typography>

    <Typography variant="h5" gutterBottom>The Plan to Relaunch</Typography>
    <Typography paragraph>
      I'm excited to get <strong>Spontaniius</strong> back on people's phones soon, and I'm grateful for everything this process has taught me. 
      Hopefully, this time around, it'll gain more traction. Expect another post when it's live!
    </Typography>
    <Typography paragraph>
      In the meantime, this is your reminder to <strong>go revisit your old projects</strong>—you'll be surprised how much they can teach you.
    </Typography>
    <Typography paragraph>
      Thanks for reading! Do you have any old projects you've revived or learned from? It'd be cool to hear about them!
    </Typography>
  </BlogLayout>
);

export default RevivingApp;