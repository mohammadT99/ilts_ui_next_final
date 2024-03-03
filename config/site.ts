export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    name: "ITLS",
    description: "Make beautiful websites regardless of your design experience.",
    navItems: [
        {
            label: "خانه",
            href: "/",
        },
        {
            label: "محصولات",
            href: "/products",
        },
        {
            label: "فروشگاه",
            href: "/pricing",
        },
        {
            label: "وبلاگ",
            href: "/blog",
        },
        {
            label: "درباره ما",
            href: "/about",
        }
    ],
    navMenuItems: [
        {
            label: 'خانه',
			href: '/' ,
        },

        {
            label: 'پروفایل',
            href: "/profile",
        },
        {
            label: "داشبورد",
            href: "/dashboard",
        },
        {
            label: "محصولات",
            href: "/products",
        },

        {
            label: "Logout",
            href: "/logout",
        },
    ],
    links: {
        github: "https://github.com/nextui-org/nextui",
        twitter: "https://twitter.com/getnextui",
        docs: "https://nextui-docs-v2.vercel.app",
        discord: "https://discord.gg/9b6yyZKmH4",
        sponsor: "https://patreon.com/jrgarciadev"

    },
};
