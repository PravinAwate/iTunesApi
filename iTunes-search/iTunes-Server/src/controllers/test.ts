type errorResponse = {
    errorCode: Number,
    errorMsg: string
}
type successResponse = {
    statusCode: Number,
    successMsg: string
}
export async function inviteUser(req: Request, res: Response) {
    var invitationBody = req.body;
    var shopId = req.params.shopId;
    var authUrl = "https://url.to.auth.system.com/invitation";
    try {
        superagent
            .post(authUrl)
            .send(invitationBody)
            .end(function (err, invitationResponse) {
                if (invitationResponse.status === 201) {
                    const filter = { authId: invitationResponse.body.authId }
                    const update = { authId: invitationResponse.body.authId, email: invitationBody.email }
                    const options = { upsert: true, new: true }
                 
                    updateUser(filter, update, options).then(()=>{
                        return res.status(200).json({
                            message: 'User updated'
                        });
                    }).catch(err =>{
                        return res.status(400).json({
                            message: 'User update failed'
                        });
                    })
                    
                    
                } else if (invitationResponse.status === 409) {
                    return res.status(400).json({
                        message: 'User already invited to this shop'
                    });
                }
            });
    } catch (err) {
        return res.status(500).send(err || { message: 'Update failed' });
    }

    async function updateUser(filter: { authId: any; }, update: { authId: any; email: any; }, options: { upsert: boolean; new: boolean; }):Promise<string> {
        //user promisses, Promises let you do that really easily, and it’s because you have that control back
        return User.findOneAndUpdate(filter, update, options).then(createdUser => {
            //using "then" will be more readable than exec
            Shop.findById(shopId).then(shop => {
                if (shop.invitations.indexOf(invitationResponse.body.invitationId)) {
                    shop.invitations.push(invitationResponse.body.invitationId);
                }
                if (shop.users.indexOf(createdUser._id) === -1) {
                    shop.users.push(createdUser);
                }
                shop.save();
                return "success";
            }).catch((err: Error) => {
                throw err;

            });
        }).catch((err: Error) => {
            throw err;
        });
    }
}