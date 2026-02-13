# Backend Integration Documentation

This document provides necessary information for backend developers to integrate with the Pizza Paradise frontend.

## 🚀 Frontend Stack
- **Framework**: React 19 (Vite)
- **Styling**: Tailwind CSS v4.1
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router Dom v7

---

## 📊 Data Models & Schemas

### 1. Pizza (Menu Item)
Currently stored in `src/data/pizzas.js`.
```typescript
interface Pizza {
  id: number;
  title: string;
  description: string;
  price: string; // Base price for Medium size
  image: string; // Local asset path
  category: "Gourmet" | "Meat" | "Seafood" | "Vegetarian";
}
```

### 2. Customization Options
Currently defined in `src/pages/OrderPage.jsx`.
- **Sizes**:
  - Small (S): 0.8x base price
  - Medium (M): 1.0x base price
  - Large (L): 1.2x base price
- **Toppings**:
  - Extra Cheese: $2.00
  - Mushrooms: $1.50
  - Olives: $1.50
  - Onions: $1.00
  - Extra Pepperoni: $2.50

### 3. Cart Item
Stored in `CartContext` and `localStorage`.
```typescript
interface CartItem {
  id: number;
  title: string;
  image: string;
  price: string;    // Calculated total for this configuration
  size: string;     // e.g., "Large"
  toppings: string[]; // List of labels, e.g., ["Extra Cheese", "Mushrooms"]
  quantity: number;
}
```

---

## 🔐 Authentication (Simulated)
Forms located in `src/pages/LoginPage.jsx` and `src/pages/SignupPage.jsx`.

### Signup Fields
- `fullName`: string
- `email`: string
- `password`: string
- `confirmPassword`: string

### Login Fields
- `email`: string
- `password`: string

**Note**: Current implementation uses `setTimeout` and `alert()` to simulate successful auth.

---

## 🛒 Order Process
The `OrderPage` collects data through a 4-step wizard:
1. **Choose Pizza**: Selects base pizza ID.
2. **Customize**: Selects size and adds toppings.
3. **Details**: Collects `name`, `phone`, and `address`.
4. **Summary**: Final review before adding to cart.

---

## 🛠️ API Integration Roadmap

### Proposed Endpoints

#### 1. Menu
- `GET /api/pizzas`: Should return the list of pizzas with categories.

#### 2. Authentication
- `POST /api/auth/signup`: Accepts name, email, password. Returns JWT or session.
- `POST /api/auth/login`: Accepts email, password. Returns JWT or session.
- `GET /api/auth/me`: To validate current session/token.

#### 3. Orders
- `POST /api/orders`: Submit an order.
  ```json
  {
    "customer": {
      "name": "John Doe",
      "phone": "555-1234",
      "address": "123 Pizza St"
    },
    "items": [
      {
        "pizzaId": 1,
        "size": "L",
        "toppings": ["Extra Cheese", "Mushrooms"],
        "quantity": 1,
        "price": 32.30
      }
    ],
    "totalPrice": 32.30,
    "paymentMethod": "Cash on Delivery"
  }
  ```

---

## 📁 Source Locations
- **Context/State**: `src/context/CartContext.jsx`
- **Order Logic**: `src/pages/OrderPage.jsx`
- **Auth UI**: `src/pages/LoginPage.jsx` & `src/pages/SignupPage.jsx`
- **Static Data**: `src/data/pizzas.js`
