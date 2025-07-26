import logo from './logo.svg'
import logo_icon from './logo_icon.svg'
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import star_icon from './star_icon.svg'
import rating_star from './rating_star.svg'
import sample_img_1 from './sample_img_1.png'
import sample_img_2 from './sample_img_2.png'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import people_5 from './people-5.png'
import people_1 from './people-1.png'
import people_2 from './people-2.png'
import step_icon_1 from './step_icon_1.svg'
import step_icon_2 from './step_icon_2.svg'
import step_icon_3 from './step_icon_3.svg'
import email_icon from './email_icon.svg'
import lock_icon from './lock_icon.svg'
import cross_icon from './cross_icon.svg'
import star_group from './star_group.png'
import credit_star from './credit_star.svg'
import profile_icon from './profile_icon.png'

export const assets = {
    logo,
    logo_icon,
    facebook_icon,
    instagram_icon,
    twitter_icon,
    star_icon,
    rating_star,
    sample_img_1,
    sample_img_2,
    email_icon,
    lock_icon,
    cross_icon,
    star_group,
    credit_star,
    profile_icon
}

export const stepsData = [
  {
    title: 'Express Your Idea',
    description: 'Enter a sentence, phrase, or detailed prompt that captures the image you envision.',
    icon: step_icon_1,
  },
  {
    title: 'Let AI Create',
    description: 'Our intelligent engine quickly converts your words into a stunning, one-of-a-kind image in seconds.',
    icon: step_icon_2,
  },
  {
    title: 'Save or Share',
    description: 'Download your artwork instantly or share it right from the app. Bring your creativity to life with ease.',
    icon: step_icon_3,
  },
];


export const testimonialsData = [
  {
    image: people_5,
    name: 'Kunal Desai',
    role: 'Creative Director',
    stars: 5,
    text: `Absolutely love the quality and speed! The image generation is flawless and fits perfectly into our workflow.`,
  },
  {
    image: people_2,
    name: 'Rohit Sinha',
    role: 'Software Engineer, TCS',
    stars: 4,
    text: `Smooth, efficient, and incredibly intuitive. The AI delivers visuals better than expected every single time.`,
  },
  {
    image: people_1,
    name: 'Vikram Reddy',
    role: 'Product Designer, Mahindra',
    stars: 5,
    text: `From concept to image in seconds — this tool is a creative game-changer. Super impressed by the output quality.`,
  },
  {
    image: profile_img_1,
    name: 'Ravi Patel',
    role: 'Founder, PixelCraft',
    stars: 4,
    text: `A fantastic tool for entrepreneurs and creators. It's quick, easy to use, and produces professional-grade visuals.`,
  },
];


export const plans = [
  {
    id: 'Basic',
    price: 10,
    credits: 20,
    desc: 'Ideal for individuals starting out.',
    label: 'Starter',
    popular: false
  },
  {
    id: 'Pro',
    price: 25,
    credits: 60,
    desc: 'Great for growing freelancers.',
    label: 'Most Value',
    popular: true
  },
  {
    id: 'Enterprise',
    price: 60,
    credits: 150,
    desc: 'Tailored for large-scale operations.',
    label: 'Premium',
    popular: false
  }
]
