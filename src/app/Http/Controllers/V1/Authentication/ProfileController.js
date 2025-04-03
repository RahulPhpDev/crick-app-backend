class ProfileController  {
    async index(req, res) {
        const user = req.user; // Assuming the user is set in the request by authentication middleware
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user); 
    }
}
module.exports = ProfileController;