import { User } from '../db/models';

/** 
    A utility function to get a User's DB profile.
    @param {string} userId - The ID of the Discord User.
*/
const getUser = async (userId: string) => {
    let egg = await User.findOne({ where: { userId } })
    if(!egg) egg = await User.create({ userId, points: 0, lifetime: 0 })
    return egg;
}

export default getUser;