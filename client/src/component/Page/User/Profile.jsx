import React, { useEffect, useState } from "react";
import { auth, db } from "../../auth/Firebase";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [userdetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        // Listen for authentication state changes
        auth.onAuthStateChanged(async (user) => {
          if (user) {
            console.log("User logged in:", user);

            // Fetch user details from Firestore
            const docRef = doc(db, "Users", user.uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
              setUserDetails(docSnap.data());
              setLoading(false); // Stop loading
            } else {
              console.log("No such document!");
              toast.error("No such document!");
              setLoading(false); // Stop loading
              navigate("/login"); // Redirect to login
            }
          } else {
            console.log("User not logged in!");
            toast.error("Please log in to view your profile.");
            setLoading(false); // Stop loading
            navigate("/login"); // Redirect to login
          }
        });
      } catch (error) {
        console.error("Error fetching user details:", error);
        toast.error("An error occurred while fetching user details.");
        setLoading(false); // Stop loading
        navigate("/login"); // Redirect to login
      }
    };

    fetchUserDetails();
  }, [navigate]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Profile</h1>
      {userdetails ? (
        <div>
          <img src={userdetails.picture} alt={userdetails.username} />
          <h2>{userdetails.username}</h2>
          <p>{userdetails.email}</p>
        </div>
      ) : (
        <p>No user details found.</p>
      )}
    </div>
  );
};

export default Profile;