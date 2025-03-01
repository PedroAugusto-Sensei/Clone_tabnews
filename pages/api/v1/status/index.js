function status(request, response) {
    response.status(200).json({chave: 'API status: OK'});
}

export default status;

