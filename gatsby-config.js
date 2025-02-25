module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://narajung88.github.io`,
    // Your Name
    name: 'Nara Jung',
    // Main Site Title
    title: `Nara Jung | Aspring ASIC Design Engineer`,
    // Description that goes under your name in main bio
    description: `I am an undergraduate CompE student at Northwestern with a passion for hardware design and development.`,
    // Optional: Twitter account handle
    author: ``,
    // Optional: Github account URL
    github: `https://github.com/narajung88`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/njung/`,
    // Content of the About Me section
    about: `Hi, I'm Nara Jung, a passionate and driven Computer Engineering student at Northwestern University. With a strong foundation in hardware and software, I thrive at the intersection of innovation and problem-solving. My journey has led me through exciting projects like designing PCBs for NU Solar Car Team, building a motorized tubing reel for efficiency, and creating a film camera shutter speed tester from scratch.Beyond engineering, I have a keen eye for photography—whether capturing moments through my lens as a professional photographer or leading creative initiatives. My interests also extend to mechanical keyboards, PC building, and violin performance. Currently, I'm expanding my expertise as an undergraduate researcher at the VAK Sustainable Computing Lab, where I explore FPGA and ASIC design for intermittent, edge computing. Whether it's developing hardware, coding efficient solutions, or crafting compelling visuals, I love bringing ideas to life through a mix of creativity and technical skill.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'NUSolar Car Team Priority Power MUX',
        description:
          'As part of the NU Solar Car Team, I developed a Priority Power Multiplexer (MUX) with ideal diode controllers, a crucial component for efficient power management in our solar-powered vehicle. This PCB enables highly efficient power switching between multiple power sources, ensuring optimal energy distribution while minimizing voltage drop and heat dissipation.',
        link: '',
      },
      {
        name: 'Oximatic',
        description:
          'Oximatic is a motorized tubing reel designed to streamline the process of retracting and releasing medical oxygen tubing. This innovative device operates at 25 feet per minute, making it 150-200% faster than traditional manual methods. By automating this task, Oximatic improves efficiency and reduces trip hazards for users in medical and home care environments.',
        link: 'https://sites.google.com/u.northwestern.edu/2024fq-dtc-sec-11-team-1/executive-summary',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'VAK Sustainable Computing Lab',
        description: 'Undergraduate Researcher, October 2024 - Present',
        link: 'https://vaksustainablecomputing.com/',
      },
      {
        name: 'Panera Bread',
        description: 'Team Lead, October 2022 - June 2024',
        link: '',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages',
        description:
          'Python, MATLAB, Verilog, Assembly, Java',
      },
      {
        name: 'Applications',
        description: 'Altium, Onshape, AutoCAD, MS Office',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 80,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { frontmatter: { date: DESC } }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: "Your Site's RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
