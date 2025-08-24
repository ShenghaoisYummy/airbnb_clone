import { LuCircleUser } from 'react-icons/lu';
import { fetchProfileImage } from '@/utils/actions';

async function UserIcon() {
  //set the profile image
  const profileImage = await fetchProfileImage();
  // if the profile image is set, return the image
  if (profileImage) {
    return <img src={profileImage} alt='profile image' className='w-6 h-6 rounded-full object-cover' />
  }
  // else return the default icon
  return <LuCircleUser className='w-6 h-6 bg-priamary rounded-full' />
}

export default UserIcon
