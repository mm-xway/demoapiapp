var APIBuilder = require('@axway/api-builder-runtime');
var Model = APIBuilder.createModel('shipment', {
    "fields": {
        "tracking_id": {
            "type": "string",
            "required": true
        },
        "is_valid": {
            "type": "boolean"
        },
        "delivery_service": {
            "type": "string"
        },
        "status": {
            "type": "string"
        },
        "estimated_delivery": {
            "type": "date"
        }
    },
    "connector": "memory",
    "actions": [],
    "description": "Cache for invalid shipment tracking IDs "
});
module.exports = Model;