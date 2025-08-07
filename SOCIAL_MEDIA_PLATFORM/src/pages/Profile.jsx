import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await axios.get(`/api/users/${id}`);
      setProfile(res.data);
    };
    fetchProfile();
  }, [id]);

  if (!profile) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-xl mx-auto p-4 text-center">
      <img src={profile.profilePic || 'https://placehold.co/100'} className="rounded-full mx-auto w-24 h-24 mb-4" />
      <h2 className="text-xl font-semibold">{profile.name}</h2>
      <p className="text-sm text-gray-600">{profile.bio}</p>
      <div className="mt-4">
        <strong>Interests:</strong> {profile.interests?.join(', ') || 'N/A'}
      </div>
    </div>
  );
};

export default Profile;
