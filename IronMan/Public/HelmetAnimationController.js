// -----JS CODE-----
// @input Component.MeshVisual toAnimate

var event = script.createEvent("TapEvent");
var open = false;

event.bind(function(eventData)
{
    var transform = script.toAnimate.getTransform();
    var rotation = transform.getLocalRotation();
    var rotateBy = 0;
        
    if(!open)
    {
        rotateBy = quat.angleAxis(30, vec3.right());
        rotation = rotation.multiply(rotateBy);
    
        transform.setLocalPosition(new vec3(0,260,50));
        transform.setLocalRotation(rotation);
        open = true;
    }
    else
    {
        rotateBy = quat.angleAxis(0, vec3.right());
        rotation = rotation.multiply(rotateBy);
        
        transform.setLocalPosition(new vec3(0,0,0));
        transform.setLocalRotation(new quat(1,0,0,0));
        open = false;
    }
    
});