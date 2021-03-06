Workout.instances = {};
var core = [];
var cardio = [];
var arms = [];
var legs = [];
var back = [];


function Workout(slots) {
	this.name = slots.name;
	this.area = slots.area;
	this.descrip = slots.descrip;
};

Workout.data = function() {

	core.push(new Workout({name:"Crunches", area:"core", descrip:"Lay on your back with your legs bent at the knees. Slowly raise your shoulders a few inches off the ground by contracting your abs, and return to the starting position."}));
	cardio.push(new Workout({name:"Jumping Jacks", area:"cardio", descrip:"Stand normally, then jump your feet out to the sides and raise your arms over your head before returning to the starting position."}));
	arms.push(new Workout({name:"Tricep Dips", area:"arms", descrip:"Place your hands shoulder-width apart on a stable surface. Hold yourself with your arms straight and your legs extended in front of you. Slowly lower your arms into a 90-degree angle, and then straighten."}));
	legs.push(new Workout({name:"Squats", area:"legs", descrip:"Stand with your feet apart, look straight ahead and hold your arms straight out in front of you. Lower your hips into a squat, keeping your knees over your feet and your back straight."}));
	legs.push(new Workout({name:"Lunges", area:"legs", descrip:"Step forward with one foot at a time, lowering until your knees are both at 90-degree angles. Make sure your front knee stays over your foot and your back knee doesn’t touch the ground."}));
	core.push(new Workout({name:"Russian Twists", area:"core", descrip:"Sit on the ground with your knees bent. Your upper body should create a V-shape with your thighs. Extend your arms out fully in front of you, and then turn to each side until they’re parallel to the ground."}));
	legs.push(new Workout({name:"Calf Raises", area:"legs", descrip:"Stand on the edge of a step or something elevated, with your heels hanging off the back and your toes on the ground. Raise your heels so you’re on tiptoe, and then lower them so they’re below the edge of the platform."}));
	arms.push(new Workout({name:"Push Ups", area:"arms", descrip:"Get into a plank position. Lower your body so that your chest gets as close to the ground as possible. Pull your elbows back as you descend, and keep your body straight."}));
	core.push(new Workout({name:"Plank", area:"core", descrip:"Get into a push-up position, placing your forearms on the ground. Hold yourself up using your core."}));
	cardio.push(new Workout({name:"Lunge Split Jumps", area:"cardio", descrip:"Get in a lunge position with one foot forward. Jump as high as possible, bringing your feet together, and then return to a lunge with the opposite leg forward."}));
	core.push(new Workout({name:"Sit-ups", area:"core", descrip:"Lay on your back with your legs bent at the knees and your arms crossed on your chest. Lift your head, shoulder and back off the ground until you’re sitting up, and then lower down again."}));
	back.push(new Workout({name:"Bird-dogs", area:"back", descrip:"Get on all fours with your knees and hands on the ground, looking at the floor. Extend one arm straight out in front of you and the opposite leg behind you. Repeat with the opposite side."}));
	core.push(new Workout({name:"Oblique Crunches", area:"core", descrip:"Lay on your back with your legs bent at the knees. Perform a crunch, but bring your elbow up to the opposite knee."}));
	legs.push(new Workout({name:"Side Lunges", area:"legs", descrip:"Stand straight with your feet shoulder-width apart and your hands clasped in front of you. Take a lateral step out to one side, bending the knee you step with and keeping the other straight. Straighten the leg you stepped with to lunge to the other side."}));
	cardio.push(new Workout({name:"Butt Kickers", area:"cardio", descrip:"Stand normally, and then run in place, bringing your heels up to your butt each time."}));
	arms.push(new Workout({name:"Small Arm Circles", area:"arms", descrip:"Extend your arms straight out to your sides. Move them in small, quick circles."}));
	arms.push(new Workout({name:"Big Arm Circles", area:"arms", descrip:"Extend your arms straight out to your sides. Move them in large, wide circles."}));
	arms.push(new Workout({name:"Plank Ups", area:"arms", descrip:"Start in a high plank position. Lower one forearm to the ground, then the other, until you’re in a low plank. Then straighten one arm at a time into a high plank."}));
	back.push(new Workout({name:"Supermans", area:"back", descrip:"Lie facedown on the ground. Reach your arms and legs straight out into the air so it looks like you’re doing a superman pose, and then lower."}));
	back.push(new Workout({name:"Bridge", area:"back", descrip:"Lay on your back with your legs bent at the knees. Lift your pelvis up to the ceiling and then lower it again."}));
	Workout.instances["arms"] = arms;
	Workout.instances["core"] = core;
	Workout.instances["legs"] = legs;
	Workout.instances["back"] = back;
	Workout.instances["cardio"] = cardio;
};

