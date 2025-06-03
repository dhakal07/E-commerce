import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

function AdminDashboard() {
  const { user, token } = useContext(AuthContext);
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [returns, setReturns] = useState([]);
  const [orders, setOrders] = useState([]);
  const [logins, setLogins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user || user.role !== "admin") {
      navigate("/");
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        };

        const [usersRes, feedbacksRes, returnsRes, ordersRes, loginsRes] = await Promise.all([
          fetch("http://localhost:5001/api/admin/users", { headers }),
          fetch("http://localhost:5001/api/admin/feedbacks", { headers }),
          fetch("http://localhost:5001/api/admin/returns", { headers }),
          fetch("http://localhost:5001/api/admin/orders", { headers }),
          fetch("http://localhost:5001/api/admin/logins", { headers }),
        ]);

        if (!usersRes.ok) throw new Error(`Failed to fetch users: ${await usersRes.text()}`);
        if (!feedbacksRes.ok) throw new Error(`Failed to fetch feedbacks: ${await feedbacksRes.text()}`);
        if (!returnsRes.ok) throw new Error(`Failed to fetch returns: ${await returnsRes.text()}`);
        if (!ordersRes.ok) throw new Error(`Failed to fetch orders: ${await ordersRes.text()}`);
        if (!loginsRes.ok) throw new Error(`Failed to fetch logins: ${await loginsRes.text()}`);

        const usersData = await usersRes.json();
        const feedbacksData = await feedbacksRes.json();
        const returnsData = await returnsRes.json();
        const ordersData = await ordersRes.json();
        const loginsData = await loginsRes.json();

        console.log("Fetched data:", { usersData, feedbacksData, returnsData, ordersData, loginsData });

        setUsers(usersData);
        setFeedbacks(feedbacksData);
        setReturns(returnsData);
        setOrders(ordersData);
        setLogins(loginsData);
      } catch (error) {
        console.error("Error fetching admin data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user, navigate, token]);

  const handleRefresh = () => {
    if (user && user.role === "admin") {
      const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
          const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          };

          const [usersRes, feedbacksRes, returnsRes, ordersRes, loginsRes] = await Promise.all([
            fetch("http://localhost:5001/api/admin/users", { headers }),
            fetch("http://localhost:5001/api/admin/feedbacks", { headers }),
            fetch("http://localhost:5001/api/admin/returns", { headers }),
            fetch("http://localhost:5001/api/admin/orders", { headers }),
            fetch("http://localhost:5001/api/admin/logins", { headers }),
          ]);

          if (!usersRes.ok) throw new Error(`Failed to fetch users: ${await usersRes.text()}`);
          if (!feedbacksRes.ok) throw new Error(`Failed to fetch feedbacks: ${await feedbacksRes.text()}`);
          if (!returnsRes.ok) throw new Error(`Failed to fetch returns: ${await returnsRes.text()}`);
          if (!ordersRes.ok) throw new Error(`Failed to fetch orders: ${await ordersRes.text()}`);
          if (!loginsRes.ok) throw new Error(`Failed to fetch logins: ${await loginsRes.text()}`);

          const usersData = await usersRes.json();
          const feedbacksData = await feedbacksRes.json();
          const returnsData = await returnsRes.json();
          const ordersData = await ordersRes.json();
          const loginsData = await loginsRes.json();

          console.log("Refreshed data:", { usersData, feedbacksData, returnsData, ordersData, loginsData });

          setUsers(usersData);
          setFeedbacks(feedbacksData);
          setReturns(returnsData);
          setOrders(ordersData);
          setLogins(loginsData);
        } catch (error) {
          console.error("Error fetching admin data:", error);
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="admin-dashboard-container">
      <h2>Admin Dashboard</h2>
      <button onClick={handleRefresh} className="refresh-btn">
        Refresh Data
      </button>

      <section className="admin-section">
        <h3>Login Activity</h3>
        {logins.length > 0 ? (
          <div className="data-grid">
            {logins.map((login) => (
              <div key={login.id} className="data-card">
                <p><strong>User ID:</strong> {login.user_id}</p>
                <p><strong>Email:</strong> {login.email}</p>
                <p><strong>Login Time:</strong> {new Date(login.login_time).toLocaleString()}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No login activity found.</p>
        )}
      </section>

      <section className="admin-section">
        <h3>New Users</h3>
        {users.length > 0 ? (
          <div className="data-grid">
            {users.map((user) => (
              <div key={user.id} className="data-card">
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>Role:</strong> {user.role}</p>
                <p><strong>Registered:</strong> {new Date(user.created_at).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No new users found.</p>
        )}
      </section>

      <section className="admin-section">
        <h3>User Feedback</h3>
        {feedbacks.length > 0 ? (
          <div className="data-grid">
            {feedbacks.map((feedback) => (
              <div key={feedback.id} className="data-card">
                <p><strong>User Email:</strong> {feedback.email}</p>
                <p><strong>Feedback:</strong> {feedback.feedback}</p>
                <p><strong>Submitted:</strong> {new Date(feedback.created_at).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No feedback found.</p>
        )}
      </section>

      <section className="admin-section">
        <h3>Return Management</h3>
        {returns.length > 0 ? (
          <div className="data-grid">
            {returns.map((ret) => (
              <div key={ret.id} className="data-card">
                <p><strong>Order ID:</strong> {ret.order_id}</p>
                <p><strong>User Email:</strong> {ret.email || "N/A"}</p>
                <p><strong>Product:</strong> {ret.productname}</p>
                <p><strong>Reason:</strong> {ret.reason}</p>
                <p><strong>Status:</strong> {ret.status}</p>
                <p><strong>Return Date:</strong> {new Date(ret.return_date).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No returns found.</p>
        )}
      </section>

      <section className="admin-section">
        <h3>Order Tracking</h3>
        {orders.length > 0 ? (
          <div className="data-grid">
            {orders.map((order) => (
              <div key={order.id} className="data-card">
                <p><strong>Order ID:</strong> {order.id}</p>
                <p><strong>User Email:</strong> {order.email}</p>
                <p><strong>Total:</strong> ${parseFloat(order.total).toFixed(2)}</p>
                <p><strong>Status:</strong> {order.status}</p>
                <p><strong>Placed:</strong> {new Date(order.order_date).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No orders found.</p>
        )}
      </section>
    </div>
  );
}

export default AdminDashboard;