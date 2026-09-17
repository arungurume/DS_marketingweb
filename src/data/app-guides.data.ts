export type IconName =
    | 'youtube'
    | 'announcements'
    | 'html-page'
    | 'weather'
    | 'instagram'
    | 'canva'
    | 'google-sheets'
    | 'google-slides'
    | 'google-calendar'
    | 'outlook-calendar'
    | 'microsoft-excel'
    | 'microsoft-power-bi'
    | 'postermywall';

export interface AppGuide {
    id: string;
    slug: string;
    name: string;
    description: string;
    icon: IconName;
    intro: string;
    seoTitle: string;
}

export const appGuides: AppGuide[] = [
    {
        id: 'youtube',
        slug: 'youtube',
        name: 'YouTube',
        description: 'Stream YouTube videos and playlists directly on your screens.',
        icon: 'youtube',
        intro: 'The YouTube app allows you to stream videos, live streams, or entire playlists on your digital signage screens. Any updates to your YouTube playlist are reflected automatically.',
        seoTitle: 'YouTube for Digital Signage: Videos & Live Streams on Any Screen'
    },
    {
        id: 'announcements',
        slug: 'announcements',
        name: 'Announcement',
        description: 'Broadcast important messages and alerts with high visibility.',
        icon: 'announcements',
        intro: 'Use the Announcement app to display important notices, event updates, or breaking news across your screen network instantly.',
        seoTitle: 'Announcements for Digital Signage: Clear Alerts on Any Screen'
    },
    {
        id: 'html-page',
        slug: 'html-page',
        name: 'Website (HTML Page)',
        description: 'Display any live website or web application as a full-screen app.',
        icon: 'html-page',
        intro: 'The Website app lets you embed live web pages, dashboards, or custom HTML content. It stays in sync with the live site at all times.',
        seoTitle: 'Websites for Digital Signage: Live HTML Pages on Any Screen'
    },
    {
        id: 'weather',
        slug: 'weather',
        name: 'Weather',
        description: 'Show real-time local weather forecasts and conditions.',
        icon: 'weather',
        intro: 'Keep your audience informed with real-time weather updates, local forecasts, and current conditions tailored to your screen location.',
        seoTitle: 'Live Weather for Digital Signage Screens'
    },
    {
        id: 'instagram',
        slug: 'instagram',
        name: 'Instagram',
        description: 'Showcase your latest Instagram posts and social media feed.',
        icon: 'instagram',
        intro: 'The Instagram app turns your social media feed into dynamic on-screen content, automatically showing your latest posts and media.',
        seoTitle: 'Instagram for Digital Signage: Live Social Feeds on Screens'
    },
    {
        id: 'canva',
        slug: 'canva',
        name: 'Canva Public',
        description: 'Display your gorgeous Canva designs with live public links.',
        icon: 'canva',
        intro: 'Connect your Canva designs to your screens. When you update your design in Canva, it automatically updates on your digital signage.',
        seoTitle: 'Canva for Digital Signage: Designs That Update Instantly'
    },
    {
        id: 'google-sheets',
        slug: 'google-sheets',
        name: 'Google Sheets',
        description: 'Turn spreadsheet data into clean, readable on-screen tables.',
        icon: 'google-sheets',
        intro: 'Display live data from Google Sheets, such as price lists, schedules, or tracking boards, that updates as you edit the sheet.',
        seoTitle: 'Google Sheets for Digital Signage: Live Tables on Any Screen'
    },
    {
        id: 'google-slides',
        slug: 'google-slides',
        name: 'Google Slides',
        description: 'Play your Google Slides presentations on a loop automatically.',
        icon: 'google-slides',
        intro: 'The Google Slides app lets you broadcast your presentations. Simply update your slides, and the changes will push to your screens automatically.',
        seoTitle: 'Google Slides for Digital Signage: Automated Presentations on Any Screen'
    },
    {
        id: 'google-calendar',
        slug: 'google-calendar',
        name: 'Google Calendar',
        description: 'Share upcoming events and schedules from Google Calendar.',
        icon: 'google-calendar',
        intro: 'Show your team or customers what is coming up next by displaying a live view of your Google Calendar events.',
        seoTitle: 'Google Calendar for Digital Signage: Live Schedules on Any Screen'
    },
    {
        id: 'outlook-calendar',
        slug: 'outlook-calendar',
        name: 'Outlook Calendar',
        description: 'Display your Microsoft Outlook calendar events and schedules.',
        icon: 'outlook-calendar',
        intro: 'Connect your Microsoft Outlook account to display real-time calendar updates and meeting schedules on your displays.',
        seoTitle: 'Outlook Calendar for Digital Signage: Live Schedules on Any Screen'
    },
    {
        id: 'microsoft-excel',
        slug: 'microsoft-excel',
        name: 'Microsoft Excel',
        description: 'Show live Excel Online spreadsheets and business data.',
        icon: 'microsoft-excel',
        intro: 'Bring your Excel spreadsheets to life on-screen. Perfect for KPIs, production tracking, and real-time data visualization.',
        seoTitle: 'Microsoft Excel for Digital Signage: Live Reports on Any Screen'
    },
    {
        id: 'microsoft-power-bi',
        slug: 'microsoft-power-bi',
        name: 'Microsoft Power BI',
        description: 'Visualize your Power BI dashboards and reports on screens.',
        icon: 'microsoft-power-bi',
        intro: 'Display your business analytics and real-time Power BI dashboards to keep your team informed and data-driven.',
        seoTitle: 'Power BI for Digital Signage: Live Dashboards on TVs'
    },
    {
        id: 'postermywall',
        slug: 'postermywall',
        name: 'PosterMyWall',
        description: 'Showcase high-quality graphics and videos from PosterMyWall.',
        icon: 'postermywall',
        intro: 'Easily display your PosterMyWall designs on your signage network, keeping your marketing content fresh and vibrant.',
        seoTitle: 'PosterMyWall for Digital Signage: Graphics & Videos on Any Screen'
    }
];
