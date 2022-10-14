export const projectInfo = {
    name:"St. Mary's Crusaders",
    type: "minipro",
    frames: "",
    version:"1",
}

export const projectTypes = [
    {
        display: 'Professional',
        key: 'pro'
    },
    {
        display: 'Professional Plus',
        key: 'plus'
    },
    {
        display: 'Professional Premium',
        key: 'premium'
    },
    {
        display: 'Minisite Pro',
        key: 'minipro'
    },
]

export const projectVersion = [
    {
        display: 'first',
        key: '1'
    },
    {
        display: 'second',
        key: '2'
    },
    {
        display: 'third',
        key: '3'
    }
]

export const tocItemInfo = [
    {
        id: 1,
        title: "Homepage",
        frameStart: "1",
        frameEnd: "1",
        description: "St Mary's Crusaders new Athletic homepage!",

    },
    {
        id: 2,
        title: "Sample Layout Pages",
        frameStart: "2",
        frameEnd: "4",
        description: "Sample Interior Pages",

    },
     /* {
        id: 3,
        title: "Block and Specialty Styles",
        frameStart: "7",
        frameEnd: "8",
        description: "These two slides are home to a showcase of the basic building block styles, along with some more specialty purpose styles that come with this new site design",

    }, */
]

export const projectFrames = [
    {
        id:1,
        img:"/images/hp.jpg",
        height:"3389px",
        width: "1600px",
        title: "St. Mary's New Athletic Site",
        frameGroup:1,
        navGraphic: true,
        navGraphicToChange: false,
        description: `<p>Welcome to St. Mary's new athletic site! Based on our initial discussion and notes, the following design has been put forth. We'll have plenty to go over during the next session, but there are a copuple of key elements I'd like to highlight.</p>
        
        <p>The page starts with the "Hero" section. We did discuss having the ability to have a video here which is still possible, though I did opt to mock this area up using news, similar to how the University of Oregon does. We can discuss this further during the session</p>
        
        <p>Below the hero, the homepage flows as expected. An introduction section is followed by a Recent Games area. Statistics follows this with an area for stat items laid over a photo. The page closes out with an area for a twitter feed and video highlights, which was something present on a both US's and Seton Prep's athletic homepage though it doesn't necessarily need to be here and this row (and any content really can be flexible)</p>
        
        <p>I'd also like to point out the site's main navigation bar. Fixed at the top of the page, I did <em>not</em> mock up the specifics for the dropdowns as I'd like to discuss the desired content and site map a bit further</p>`, 
    },
    /* {
        id:2,
        img:"/images/hp2.jpg",
        height:"4633px",
        width: "1600px",
        title: "Homepage Hover/On States",
        frameGroup:1,
        navGraphic: true,
        navGraphicToChange: true,
        description:`<p>This slide may look similar to the first, however the significant difference here is how interactive items like links show their hover states. Again, a bit limited in the static nature of these presentations, we see here how the image links will appear when hovered, along with how buttons and links will look after their transitions when hovered. Nothing will be a hard change from normal to hovered, instead anticipate soft fades and transitions between states.</p>`, 
    },
   {
        id:3,
        img:"/images/hp3.jpg",
        height:"900px",
        width: "1600px",
        title: "Navigation Interaction Preview",
        frameGroup:1,
        navGraphic: false,
        navGraphicToChange: false,
        description:`<p>Shown here is how VA’s new expanded navigation will look when an item is hovered over. For your reference, this slide does not scroll, instead consider this a snapshot of how nav elements will appear. The biggest item to note here is the Mega Menu panel dropdown. Shown here is the academics panel, though all panels will follow the same scheme, with a section for a header and text, and button. The main nav items in the center, and an associated photo on the far right. Laying the panel out like this, with the second level pages in the middle means that the user doesn't have to move their mouse very far, regardless of which main item they've engaged with.</p>`, 
    },
    {
        id:4,
        img:"/images/hp4.jpg",
        height:"900px",
        width: "1600px",
        title: "Community Links Panel Preview",
        frameGroup:1,
        navGraphic: false,
        navGraphicToChange: false,
        description:`<p>A question may have come up by now. "Where is the omni/auxiliary navigation?" At the tail end of the main nav we see a hamburger icon, which when engaged with will bring down a panel for "Community Links". "Give Now", "Parents", "Alumni" and "MyVA" are all here, along with a site search. Keeping these elements contained here allows for our main navigation to remain tight and minimal, fixed at the top of the screen.</p>`, 
    }, */
    {
        id:2,
        img:"/images/lp.jpg",
        height:"2846px",
        width: "1600px",
        title: "Sample Layout: Landing Page",
        frameGroup:2,
        navGraphic: true,
        navGraphicToChange: false,
        description:`<p>Outside of just the homepage, this mock up includes three sample interior pages to give you an idea of how the rest of the site will feel. The first of these layouts has been labled "Landing Page" as the layout displayed shows off how a page with some prominence would appear with the design.</p>`,
    },
    {
        id:3,
        img:"/images/wlsr.jpg",
        height:"2232",
        width: "1600px",
        title: "Sample Layout: Wide Left, Skinny Right",
        frameGroup:2,
        navGraphic: true,
        navGraphicToChange: false,
        description:`<p>Outside of just the homepage, this mock up includes three sample interior pages to give you an idea of how the rest of the site will feel. The second of these layouts has been labled "Wide Left, Skinny Right". As the name suggests, content here is laid out in the tried and true fashion of a wide left column, with a skinnier sidebar on the right.</p>`,
    },
    {
        id:4,
        img:"/images/vc.jpg",
        height:"2556px",
        width: "1600px",
        title: "Sample Layout: Varied Content",
        frameGroup:2,
        navGraphic: true,
        navGraphicToChange: false,
        description:`<p>Outside of just the homepage, this mock up includes three sample interior pages to give you an idea of how the rest of the site will feel. The last of these layouts has been labled "Varied Content". The name here denotes the flexiblity you'll have when laying out pages and content, in that you're not set to one single paradigm. Additionally, this layout shows how a page without a page banner may look, as we understand it may be difficult to find an adequate image for every single page.</p>`,
    },
     /*{
        id:7,
        img:"/images/bs.jpg",
        height:"4911px",
        width: "1600px",
        title: "Block Styles",
        frameGroup:3,
        navGraphic: false,
        navGraphicToChange: false,
        description:`<p>Showcased on these last two slides is a library or reference to all of the different building block styles your school will have at their disposal when it comes to building out pages. The first of these pages, entitled "Block Styles" shows off the basic type styling that will be used acrossed the site, along with how some specific content components will appear. You'll likely to never see a pae utalize all of these styles at once, and seeing them all here can be overwhelming at first, but remember that these slides are just a reference guide to show off design elements, as well as a reference for resources on our end to use when building out the site.</p>`,
    },
    {
        id:8,
        img:"/images/ss.jpg",
        height:"5040px",
        width: "1600px",
        title: "Specialty Styles",
        frameGroup:3,
        navGraphic: false,
        navGraphicToChange: false,
        description:`<p>Showcased on these last two slides is a library or reference to all of the different building block styles your school will have at their disposal when it comes to building out pages. The first of these pages, entitled "Specialty Styles" shows off more specific use case styles, along with a suite of row styles that will give your school more flexibility in regards to content population. You'll likely to never see a pae utalize all of these styles at once, and seeing them all here can be overwhelming at first, but remember that these slides are just a reference guide to show off design elements, as well as a reference for resources on our end to use when building out the site.</p>`,
    }  */
]

export const fixedNavGraphic = {
    initial:{
        img:"/images/navBar.png",
        width:"1600px",
        height:"163px",
    },
    scrolled: {
        img:"/images/navBar.png",
        width:"1600px",
        height:"163px",
    }
}

projectInfo.type = projectTypes[3].display;
projectInfo.frames= projectFrames.length;
projectInfo.version = projectVersion[0].display;