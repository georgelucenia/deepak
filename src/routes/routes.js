export const dashboardRoutes = {
  label: 'Dashboard',
  labelDisable: true,
  children: [
    {
      name: 'Dashboard',
      active: true,
      icon: 'chart-pie',
      children: [
        {
          name: 'Default',
          to: '/',
          exact: true,
          active: true
        },
        {
          name: 'Analytics',
          to: '/dashboard/analytics',
          active: true
        },
        {
          name: 'CRM',
          to: '/dashboard/crm',
          active: true
        },
        {
          name: 'E Commerce',
          to: '/dashboard/e-commerce',
          active: true
        },
        {
          name: 'Management',
          to: '/dashboard/project-management',
          active: true
        },
        {
          name: 'SaaS',
          to: '/dashboard/saas',
          active: true
        }
      ]
    }
  ]
};
export const appRoutes = {
  label: 'app',
  children: [
    {
      name: 'Calendar',
      icon: 'calendar-alt',
      to: '/app/calendar',
      active: true
    },
    {
      name: 'Chat',
      icon: 'comments',
      to: '/app/chat',
      active: true
    },
    {
      name: 'Email',
      icon: 'envelope-open',
      active: true,
      children: [
        {
          name: 'Inbox',
          to: '/email/inbox',
          active: true
        },
        {
          name: 'Email detail',
          to: '/email/email-detail',
          active: true
        },
        {
          name: 'Compose',
          to: '/email/compose',
          active: true
        }
      ]
    },
    {
      name: 'Events',
      icon: 'calendar-day',
      active: true,
      children: [
        {
          name: 'Create an event',
          to: '/events/create-an-event',
          active: true
        },
        {
          name: 'Event detail',
          to: '/events/event-detail',
          active: true
        },
        {
          name: 'Event list',
          to: '/events/event-list',
          active: true
        }
      ]
    },
    {
      name: 'E Commerce',
      icon: 'shopping-cart',
      active: true,
      children: [
        {
          name: 'Product',
          active: true,
          children: [
            {
              name: 'Product list',
              to: '/e-commerce/product/product-list',
              active: true
            },
            {
              name: 'Product grid',
              to: '/e-commerce/product/product-grid',
              active: true
            },
            {
              name: 'Product details',
              to: '/e-commerce/product/product-details',
              active: true
            }
          ]
        },
        {
          name: 'Orders',
          active: true,
          children: [
            {
              name: 'Order list',
              to: '/e-commerce/orders/order-list',
              active: true
            },
            {
              name: 'Order details',
              to: '/e-commerce/orders/order-details',
              active: true
            }
          ]
        },
        {
          name: 'Customers',
          to: '/e-commerce/customers',
          active: true
        },
        {
          name: 'Customer details',
          to: '/e-commerce/customer-details',
          active: true
        },
        {
          name: 'Shopping cart',
          to: '/e-commerce/shopping-cart',
          active: true
        },
        {
          name: 'Checkout',
          to: '/e-commerce/checkout',
          active: true
        },
        {
          name: 'Billing',
          to: '/e-commerce/billing',
          active: true
        },
        {
          name: 'Invoice',
          to: '/e-commerce/invoice',
          active: true
        }
      ]
    },
    {
      name: 'Kanban',
      icon: ['fab', 'trello'],
      to: '/app/kanban',
      active: true
    },
    {
      name: 'Social',
      icon: 'share-alt',
      active: true,
      children: [
        {
          name: 'Feed',
          to: '/social/feed',
          active: true
        },
     ,
        {
          name: 'Followers',
          to: '/social/followers',
          active: true
        }
      ]
    }
  ]
};

export const pagesRoutes = {
  label: 'pages',
  children: [
    {
      name: 'Starter',
      icon: 'flag',
      to: '/pages/starter',
      active: true
    },
    {
      name: 'Landing',
      icon: 'globe',
      to: '/landing',
      active: true
    },
    {
      name: 'Authentication',
      icon: 'lock',
      active: true,
      children: [
        {
          name: 'Simple',
          active: true,
          children: [
            {
              name: 'Login',
              to: '/authentication/simple/login',
              active: true
            },
            {
              name: 'Logout',
              to: '/authentication/simple/logout',
              active: true
            },
        
              name: 'Reset password',
              to: '/authentication/simple/reset-password',
              active: true
            },
            {
              name: 'Lock screen',
              to: '/authentication/simple/lock-screen',
              active: true
            }
          ]
        },
        {
          name: 'Card',
          active: true,
          children: [
            {
              name: 'Login',
              to: '/authentication/card/login',
              active: true
            },
            {
              name: 'Logout',
              to: '/authentication/card/logout',
              active: true
            },
            {
              name: 'Register',
              to: '/authentication/card/register',
              active: true
            },
            {
              name: 'Forgot password',
              to: '/authentication/card/forgot-password',
              active: true
            },
            {
              name: 'Confirm mail',
              to: '/authentication/card/confirm-mail',
              active: true
            },
            {
              name: 'Reset password',
              to: '/authentication/card/reset-password',
              active: true
            },
            {
              name: 'Lock screen',
              to: '/authentication/card/lock-screen',
              active: true
            }
          ]
        },
        {
          name: 'Split',

          active: true,
          children: [
            {
              name: 'Login',
              to: '/authenticatioplit/login',
              active: true
            },
            {
              name: 'Logout',
              to: '/authentication/split/logout',
              active: true
            },
            {
              name: 'Register',
              to: '/authentication/split/register',
              active: true
            },
            {
              name: 'Forgot password',
              to: '/authentication/split/forgot-password',
              active: true
            },
            {
              name: 'Confirm mail',
              to: '/authentication/split/confirm-mail',
              active: true
            },
            {
              name: 'Reset passwor,
              to: '/authentication/split/reset-password',
              active: true
            },
            {
              name: 'Lock screen',
              to: '/authentication/split/lock-screen',
              active: true
            }
          ]
        },
        {
          name: 'Wizard',
          to: '/authentication/wizard',
          active: true
        },
        {
          name: 'Modal',
          to: '/authentication-modal',
          active: true
        }
      ]
    },
    {
      name: 'User',
      icon: 'user',
      active: true,
      children: [
       
      name: 'Pricing',
      icon: 'tags',
      active: true,
      children: [
        {
          name: 'Pricing default',
          to: '/pricing/pricing-default',
          active: true
        },
        {
          name: 'Pricing alt',
          to: '/pricing/pricing-alt',
          active: true
        }
      ]
    },
    {
      name: 'Faq',
      icon: 'question-circle',
      active: true,
      childr
        {
          name: 'Faq basic',
          to: '/faq/faq-basic',
          active: true
        },
        {
          name: 'Faq alt',
          to: '/faq/faq-alt',
          active: true
        },
        {
          name: 'Faq accordion',
          to: '/faq/faq-accordion',
          active: true
        }
      ]

          name: 'Associations',
          to: '/miscellaneous/associations',
          active: true
        },
        {
          name: 'Invite people',
          to: '/miscellaneous/invite-people',
          active: true
        },
        {
          name: 'Privacy policy',
          to: '/miscellaneous/privacy-policy',
          active: true
        }
      ]
    }
  ]
};

export const modulesRoutes = {
  label: 'Modules',
  children: [
    {
      name: 'Forms',
      active: true,
      icon: 'file-alt',
      children: [
        {
          name: 'Basic',
          active: true,
          children: [
            {
              name: 'Form control',
              to: '/forms/basic/form-control',
              active: true
            },
            {
              name: 'Input 
              to: '/forms/basic/input-group',
              active: true
            
          name: 'Advance',
          active: true,
          children: [
            {
              name: 'Advance select',
              to: '/forms/advance/advance-select',
              active: true
            },
            {
              name: 'Date picker',
              to: '/forms/advance/date-picker',
              active: true
            },
            {
              name: 'Editor',
              to: '/forms/advance/editor',
              active: true
            },
            {
              name: 'Emoji button',
              to: '/forms/advance/emoji-button',
              active: true
            },
            {
              name: 'File uploader',
              to: '/forms/advance/file-uploader',
              active: true
            },
            {
              name: 'Rating',
              to: '/forms/advance/rating',
              active: true
            }
          ]
        },
        {
          name: 'Floating labels',
          to: '/forms/floating-labels',
          active: true
        },
        {
          name: 'Wizard',
          to: '/forms/wizard',
          active: true
        },
        {
          name: 'Validation',
          to: '/forms/validation',
          active: true
      
          name: 'Advance tables',
          to: '/tables/advance-tables',
          active: true
        }
      ]
    },
    {
      name: 'Charts',
      icon: 'chart-line',
      active: true,
      children: [
        {
          name: 'Chartjs',
          to: '/charts/chartjs',
          active: true
        },
        {
          name: 'ECharts',
          active: true,
          children: [
            {
              name: 'How to use',
              to: '/charts/echarts/how-to-use',
              active: true
            },
            {
              name: 'Line charts',
              to: '/charts/echarts/line-charts',
              active: true
            },
            {
              name: 'Bar charts',
              to: '/charts/echarts/bar-charts',
              active: true
            },
            {
              name: 'Candlestick charts',
              to: '/charts/echarts/candlestick-charts',
              active: true
            },
            {
              name: 'Geo map',
              to: '/charts/echarts/geo-map',
              active: true
            },
    {
      name: 'Icons',
      active: true,
      icon: 'shapes',
      children: [
        {
          name: 'Font awesome',
          to: '/icons/font-awesome',
          active: true
        },
        {
          name: 'React icons',
          to: '/icons/react-icons',
          active: true
        }
      ]
    },
    {
      name: 'Maps',
      icon: 'map',
      active: true,
      children: [
        {
          name: 'Google map',
          to: '/maps/google-map',
          active: true
        },
        {
          name: 'Leaflet map',
          to: '/maps/leaflet-map',
          active: true
        }
      ]
    },
    {
      name: 'Components',
      active: true,
      icon: 'puzzle-piece',
      children: [
        {
          name: 'Alerts',
          to: '/components/alerts',
          active: true
        },
        {
          name: 'Accordion',
          to: '/components/accordion',
          active: true
        },
        {
          name: 'Animated icons',
          to: '/components/animated-icons',
          active: true
        },
        {
          name: 'Background',
          to: '/components/background',
          active: true
        },
        {
          name: 'Badges',
          to: '/components/badges',
          active: true
        },
        {
          name: 'Breadcrumbs',
          to: '/components/breadcrumb',
          active: true
        },
        {
          name: 'Buttons',
       
              name: 'Slick',
              to: '/components/carousel/slick',
              active: true
            }
          ]
        },
        {
          name: 'Collapse',
          to: '/components/collapse',
          active: true
        },
        {
          name: 'Cookie notice',
          to: '/components/cookie-notice',
          active: true
        },
        {
          name: 'Countup',
          to: '/components/countup',
          active: true
        },
        {
          name: 'Draggable',
          to: '/components/draggable',
          active: true
        },
        {
          name: 'Dropdowns',
          to: '/components/dropdowns',
          active: true
        },
        {
          name: 'List group',
          to: '/components/list-group',
          active: true
        },
        {
          name: 'Modals',
          to: '/components/modals',
          active: true
        },
        {
          name: 'Offcanvas',
          to: '/components/offcanvas',
          active: true
        },
        {
          name: 'Navs & Tabs',
          active: true,
          children: [
            {
              name: 'Navs',
              to: '/components/navs-and-tabs/navs',
              active: true
            },
            {
              name: 'Navbar',
              to: '/components/navs-and-tabs/navbar',
              active: true
            },
            {
              name: 'Vertical navbar',
              to: '/components/navs-and-tabs/vertical-navbar',
              active: true
            },
            {
              name: 'Top navbar',
              to: '/components/navs-and-tabs/top-navbar',
              active: true
            },
            {
              name: 'Combo navbar',
              to: '/components/navs-and-tabs/combo-navbar',
              active: true
            },
            {
              name: 'Tabs',
              to: '/components/navs-and-tabs/tabs',
              active: true
            }
          ]
        },
        {
          name: 'Pictures',
          active: true,
          children: [
            {
              name: 'Avatar',
              to: '/components/pictures/avatar',
              active: true
            },
            {
              name: 'Images',
              to: '/components/pictures/images',
              active: true
            },
            {
              name: 'Figures',
              to: '/components/pictures/figures',
              active: true
            },
            {
              name: 'Hoverbox',
              to: '/components/pictures/hoverbox',
              active: true
            },
            {
              name: 'Lightbox',
              to: '/components/pictures/lightbox',
              active: true
            }
          ]
        },
        {
          name: 'Progress Bar',
          to: '/components/progress-bar',
          active: true
 
          name: 'Search',
          to: '/components/search',
          active: true
        },
        {
          name: 'Spinners',
          to: '/components/spinners',
          active: true
        },
        {
          name: 'Toasts',
          to: '/components/toasts',
          active: true
        },
        {
          name: 'Tooltips',
          to: '/components/tooltips',
          active: true
        },
        {
          name: 'Treeview',
          to: '/components/treeview',
          active: true
        },
        {
          name: 'Typed text',
          to: '/components/typed-text',
          active: true
        },
        {
          name: 'Videos',
          active: true,
          children: [
            {
              name: 'Embed',
              to: '/components/videos/embed',
              active: true
            },
            {
              name: 'React Player',
              to: '/components/videos/react-player',
              active: true
            }
          ]
        }
      ]
    },
    {
      name: 'Utilities',
      active: true,
      icon: 'fire',
      children: [
        {
          name: 'Borders',
          to: '/utilities/borders',
          active: true
        },
        {
          name: 'Colors',
          to: '/utilities/colors',
          active: true
        },
        {
          name: 'Colored links',
          to: '/utilities/colored-links',
          active: true
        },
        {
          name: 'Display',
          to: '/utilities/display',
          active: true
        },
        {
          name: 'Flex',
          to: '/utilities/flex',
          active: true
        },
        {
          name: 'Float',
          to: '/utilities/float',
          active: true
        },
        {
          name: 'Grid',
          to: '/utilities/grid',
          active: true
        },
        {
          name: 'Scroll Bar',
          to: '/utilities/scroll-bar',
          active: true
        },
        {
          name: 'Position',
          to: '/utilities/position',
          active: true
        },
        {
          name: 'Spacing',
          to: '/utilities/spacing',
          active: true
        },
        {
          name: 'Sizing',
          to: '/utilities/sizing',
          active: true
        },
        {
          name: 'Stretched link',
          to: '/utilities/stretched-link',
          active: true
        },
        {
          name: 'Text truncation',
          to: '/utilities/text-truncation',
          active: true
        },
        {
          name: 'Typography',
          to: '/utilities/typography',
          active: true
        },
        {
          name: 'Vertical align',
          to: '/utilities/vertical-align',
          active: true
        },
        {
          name: 'Visibility',
          to: '/utilities/visibility',
          active: true
        }
      ]
    },
    {
      name: 'Widgets',
      icon: 'poll',
      to: '/widgets',
      active: true
    },
    {
    
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

export const documentationRoutes = {
  label: 'documentation',
  children: [
    {
      name: 'Getting started',
      icon: 'rocket',
      to: '/documentation/getting-started',
      active: true
    },
    {
      name: 'Customization',
      active: true,
      icon: 'wrench',
      children: [
        {
          name: 'Configuration',
          to: '/documentation/configuration',
          active: true
        },
        {
          name: 'Styling',
          to: '/documentation/styling',
          active: true
        },
        {
          name: 'Dark mode',
          to: '/documentation/dark-mode',
          active: true,
          badge: {
            type: 'success',
            text: 'New'
          }
        },
        {
          name: 'Plugin',
          to: '/documentation/plugin',
          active: true
        }
      ]
    },
    {
      name: 'Design file',
      icon: 'palette',
      to: '/documentation/design-file',
      active: true
    },
    {
      name: 'Changelog',
      icon: 'code-branch',
      to: '/changelog',
      active: true
    }
  ]
};

export default [
  dashboardRoutes,
  appRoutes,
  pagesRoutes,
  modulesRoutes,
  documentationRoutes
];
