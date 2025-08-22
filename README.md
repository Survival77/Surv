# Mobile Shop Web App

A modern, full-stack web application for a mobile phone shop built with React, Node.js, Express, and MongoDB.

## Features

### 🛍️ **E-commerce Functionality**
- Product browsing with search and filtering
- Shopping cart management
- Secure checkout process
- Order tracking and management
- User reviews and ratings

### 🔐 **Authentication & Authorization**
- User registration and login
- JWT-based authentication
- Role-based access control (User/Admin)
- Profile management

### 📱 **Responsive Design**
- Mobile-first approach
- Modern UI with Tailwind CSS
- Smooth animations and transitions
- Cross-browser compatibility

### 🚀 **Performance & Security**
- RESTful API architecture
- Input validation and sanitization
- Rate limiting and security headers
- Optimized database queries

## Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **express-validator** - Input validation

### Frontend
- **React 18** - UI library
- **React Router** - Client-side routing
- **React Query** - Data fetching
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **React Hook Form** - Form handling

## Project Structure

```
mobile-shop-webapp/
├── server/                 # Backend code
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   ├── middleware/        # Custom middleware
│   └── index.js           # Server entry point
├── client/                # Frontend code
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── contexts/      # React contexts
│   │   └── App.jsx        # Main app component
│   ├── public/            # Static assets
│   └── package.json       # Frontend dependencies
├── package.json           # Backend dependencies
└── README.md             # This file
```

## Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas)

## Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd mobile-shop-webapp
```

### 2. Install Dependencies

```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd client
npm install
cd ..
```

### 3. Environment Configuration

Create a `.env` file in the root directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/mobile-shop

# JWT Secret
JWT_SECRET=your-super-secret-jwt-key-here

# Optional: For production
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/mobile-shop
```

### 4. Database Setup

#### Option A: Local MongoDB
1. Install MongoDB locally
2. Start MongoDB service
3. The database will be created automatically when you first run the app

#### Option B: MongoDB Atlas
1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Get your connection string
4. Update the `MONGODB_URI` in your `.env` file

### 5. Run the Application

#### Development Mode (Both Frontend & Backend)
```bash
npm run dev
```

#### Backend Only
```bash
npm run server
```

#### Frontend Only
```bash
cd client
npm run dev
```

#### Production Build
```bash
# Build frontend
npm run build

# Start production server
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile
- `PUT /api/auth/profile` - Update user profile
- `PUT /api/auth/change-password` - Change password

### Products
- `GET /api/products` - Get all products (with filtering)
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (Admin only)
- `PUT /api/products/:id` - Update product (Admin only)
- `DELETE /api/products/:id` - Delete product (Admin only)
- `POST /api/products/:id/reviews` - Add product review

### Categories
- `GET /api/categories` - Get all categories
- `GET /api/categories/:id` - Get single category
- `POST /api/categories` - Create category (Admin only)
- `PUT /api/categories/:id` - Update category (Admin only)
- `DELETE /api/categories/:id` - Delete category (Admin only)

### Cart
- `GET /api/cart` - Get user's cart
- `POST /api/cart/add` - Add item to cart
- `PUT /api/cart/update/:productId` - Update cart item quantity
- `DELETE /api/cart/remove/:productId` - Remove item from cart
- `DELETE /api/cart/clear` - Clear entire cart
- `POST /api/cart/apply-coupon` - Apply coupon code

### Orders
- `GET /api/orders` - Get user orders (or all orders for admin)
- `GET /api/orders/:id` - Get single order
- `POST /api/orders` - Create new order
- `PUT /api/orders/:id/status` - Update order status (Admin only)
- `PUT /api/orders/:id/payment-status` - Update payment status (Admin only)
- `DELETE /api/orders/:id` - Cancel order

## Usage

### For Customers
1. **Browse Products**: Visit the home page to see featured products
2. **Search & Filter**: Use the search bar and category filters
3. **Add to Cart**: Click the cart icon on any product
4. **Manage Cart**: View and modify items in your shopping cart
5. **Checkout**: Complete your purchase with shipping and payment details
6. **Track Orders**: Monitor your order status in the orders section

### For Administrators
1. **Product Management**: Add, edit, and remove products
2. **Category Management**: Organize products into categories
3. **Order Management**: Update order statuses and track shipments
4. **User Management**: Monitor user accounts and activities

## Customization

### Adding New Features
1. Create new models in `server/models/`
2. Add API routes in `server/routes/`
3. Create React components in `client/src/components/`
4. Add new pages in `client/src/pages/`

### Styling
- Modify `client/tailwind.config.js` for theme customization
- Update `client/src/index.css` for custom CSS
- Use Tailwind utility classes for component styling

### Database Schema
- Modify models in `server/models/` to change data structure
- Run database migrations if needed
- Update API endpoints accordingly

## Deployment

### Backend Deployment
1. Set `NODE_ENV=production` in environment variables
2. Use a process manager like PM2
3. Set up reverse proxy with Nginx
4. Configure SSL certificates

### Frontend Deployment
1. Build the production version: `npm run build`
2. Deploy the `dist` folder to your hosting service
3. Configure your hosting service to serve the React app

### Database Deployment
1. Use MongoDB Atlas for cloud hosting
2. Set up database backups
3. Configure network access rules
4. Monitor database performance

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## Troubleshooting

### Common Issues

#### MongoDB Connection Error
- Ensure MongoDB is running
- Check connection string in `.env` file
- Verify network access if using MongoDB Atlas

#### Port Already in Use
- Change the port in `.env` file
- Kill processes using the default port
- Use different ports for frontend and backend

#### Build Errors
- Clear `node_modules` and reinstall dependencies
- Check Node.js version compatibility
- Verify all environment variables are set

#### CORS Issues
- Ensure backend is running on the correct port
- Check proxy configuration in `vite.config.js`
- Verify API endpoint URLs

## Support

For support and questions:
- Create an issue in the repository
- Check the troubleshooting section
- Review the API documentation

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- MongoDB for the flexible database solution
- Express.js community for the robust web framework

---

**Happy Coding! 🚀**
