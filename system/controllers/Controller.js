class Controller {
    constructor(service) {
        this.service = service;
        this.getAll = this.getAll.bind(this);
        this.get = this.get.bind(this);
        this.insert = this.insert.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    async getAll(req,res,next) {
        try{
            const response = await this.service.getAll(req.query);
            return res.status(response.statusCode).json(response);
        }catch(error){
            next(error);
        }
    }

    async get( req, res, next ) {
        const { id } = req.params;

        try {
            const response = await this.service.get( id );

            return res.status( response.statusCode ).json( response );
        } catch ( e ) {
            next( e );
        }
    }

    async insert(req, res,next) {
        try{
            const response = await this.service.insert(req.body);
            return res.status( response.statusCode ).json( response );
        }catch(error){
            next(error);
        }
    }

    async update(req, res, next) {
        const {id} = req.params;
        try{
            let response = await this.service.update(id, req.body);
            return res.status(response.statusCode).send(response);
        }catch(error){
            next(error)
        }
        
    }

    async delete(req,res) {
        const { id } = req.params;

        try {
            const response = await this.service.delete( id );

            return res.status( response.statusCode ).json( response );
        } catch ( e ) {
            next( e );
        }
    }
}

module.exports = {Controller};

