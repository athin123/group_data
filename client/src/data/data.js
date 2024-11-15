import React from 'react';
import { Link } from 'react-router-dom';
import { iconsImgs } from "../utils/images";

export const navigationLinks = [
    { id: 1, title: 'Home', image: iconsImgs.home,link:'/dashboard' },
    { id: 2, title: 'Orders', image: iconsImgs.budget,link:'/orders'  },
    { id: 3, title: 'Stocks', image: iconsImgs.report,link:'/stocks'  },
    { id: 4, title: 'Add Orders', image: iconsImgs.bills, link:'/addorder'},
    { id: 5, title: 'Add Stocks', image: iconsImgs.bills, link:'/addstocks'},
    { id: 6, title: 'Log Out', image: iconsImgs.alert,link:'/'},
];

// In your component rendering the navigation links
{navigationLinks.map((link) => (
    <Link to={link.path} key={link.id}>
        <img src={link.image} alt={link.title} />
        <span>{link.title}</span>
    </Link>
))}
