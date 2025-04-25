import React, { useState } from 'react';
import './browseYoga.css';
import tadasana from '../assets/tadasana.jpg';

function BrowseYoga() {
    const [showPoses, setShowPoses] = useState(false);
    const [showIntermediatePoses, setShowIntermediatePoses] = useState(false);
    const [showAdvancedPoses, setShowAdvancedPoses] = useState(false);
    const [selectedPose, setSelectedPose] = useState(null);

    const handleButtonClick = (level) => {
        if (level === 'Beginner') {
            setShowPoses(true);
            setShowIntermediatePoses(false);
            setShowAdvancedPoses(false); 
        } else if (level === 'Intermediate') {
            setShowIntermediatePoses(true);
            setShowPoses(false);
            setShowAdvancedPoses(false); 
        } else if (level === 'Advanced') {
            setShowAdvancedPoses(true);
            setShowPoses(false);
            setShowIntermediatePoses(false); 
        } else {
            setShowPoses(false);
            setShowIntermediatePoses(false);
            setShowAdvancedPoses(false); 
        }
    };

    const handleImageClick = (pose) => {
        setSelectedPose(pose);
    };

    const poses = [
        {
            title: "Mountain Pose (Tadasana)",
            image: tadasana,
            steps: [
                "Step 1: Stand with your feet together, big toes touching, heels slightly apart (or hip-width if more stable). Spread your toes wide to grip the floor.",
                "Step 2: Engage your thigh muscles by lifting your kneecaps slightly (without locking your knees). Tuck your tailbone slightly under to align your pelvis.",
                "Step 3: Roll your shoulders back and down, letting your arms hang naturally by your sides, palms facing forward.",
                "Step 4: Lengthen your spine by lifting through the crown of your head, as if a string is pulling you upward. Keep your chin parallel to the ground.",
                "Step 5: Breathe deeply through your nose for 5-10 breaths, feeling your feet rooted and chest open."
            ]
        },
        {
            title: "Cat-Cow Pose (Marjaryasana-Bitilasana)",
            steps: [
                "Step 1: Start on all fours in a tabletop position—hands under shoulders, knees under hips, fingers spread wide.",
                "Step 2 (Cow): Inhale, drop your belly toward the mat, lift your tailbone and chest upward, and gaze slightly forward. Keep shoulders away from ears.",
                "Step 3 (Cat): Exhale, round your back like an angry cat, tuck your chin to your chest, and draw your belly button toward your spine.",
                "Step 4: Flow between these two positions with your breath—inhale for Cow, exhale for Cat.",
                "Step 5: Repeat for 5-8 breath cycles, moving smoothly and gently."
            ]
        },
        {
            title: "Downward-Facing Dog (Adho Mukha Svanasana)",
            steps: [
                "Step 1: Begin on hands and knees in tabletop—hands slightly forward of shoulders, knees under hips.",
                "Step 2: Tuck your toes under, then lift your hips up and back, straightening your legs as much as comfortable (knees can stay bent if needed).",
                "Step 3: Spread your fingers wide, pressing evenly through your palms and knuckles. Your hands should be shoulder-width apart.",
                "Step 4: Push your hips toward the ceiling, forming an inverted V-shape. Let your head hang naturally between your arms, ears near your biceps.",
                "Step 5: Hold for 5 deep breaths, pedaling your feet (bending one knee, then the other) if your hamstrings feel tight."
            ]
        },
        {
            title: "Child's Pose (Balasana)",
            steps: [
                "Step 1: Kneel on the mat, bringing your big toes together and knees apart (hip-width or wider for comfort).",
                "Step 2: Sit back on your heels, then slowly lower your torso toward the ground between your thighs.",
                "Step 3: Stretch your arms forward, palms down, or rest them alongside your body, palms up, depending on what feels better.",
                "Step 4: Rest your forehead on the mat (or a block if it doesn't reach), letting your shoulders relax.",
                "Step 5: Breathe deeply for 5-10 breaths, sinking deeper into the stretch with each exhale."
            ]
        },
        {
            title: "Warrior I (Virabhadrasana I)",
            steps: [
                "Step 1: Stand in Mountain Pose, then step your left foot back about 3-4 feet, turning it out at a 45-degree angle.",
                "Step 2: Bend your right knee so it's over your ankle, keeping your right foot pointing forward. Square your hips toward the front.",
                "Step 3: Raise both arms overhead, palms facing each other or touching, keeping shoulders relaxed.",
                "Step 4: Press into both feet—front heel pushing down, back foot grounding through the outer edge. Gaze forward or slightly up.",
                "Step 5: Hold for 5 breaths, then switch sides by stepping the right foot back."
            ]
        },
        {
            title: "Tree Pose (Vrksasana)",
            steps: [
                "Step 1: Stand in Mountain Pose, shifting your weight onto your left leg.",
                "Step 2: Lift your right foot, placing the sole against your left calf or inner thigh (avoid the knee). Press your foot into your leg and leg into your foot.",
                "Step 3: Bring your hands to prayer position at chest level, or raise them overhead like branches if steady.",
                "Step 4: Fix your gaze on a point in front of you to help balance. Engage your core to stay upright.",
                "Step 5: Hold for 5 breaths, then switch to the other leg."
            ]
        },
        {
            title: "Seated Forward Bend (Paschimottanasana)",
            steps: [
                "Step 1: Sit on the mat with legs extended straight, feet flexed (toes pointing up).",
                "Step 2: Inhale, lengthen your spine by sitting tall and reaching your arms overhead.",
                "Step 3: Exhale, hinge at your hips (not your waist), and reach forward toward your feet, keeping your back straight as long as possible.",
                "Step 4: Rest your hands on your legs, shins, or feet—wherever you can reach comfortably without rounding your back too much.",
                "Step 5: Hold for 5-8 breaths, relaxing your head and neck, deepening the stretch slightly with each exhale."
            ]
        },
        {
            title: "Cobra Pose (Bhujangasana)",
            steps: [
                "Step 1: Lie face down, legs extended back, tops of feet pressing into the mat. Place your hands under your shoulders, fingers spread.",
                "Step 2: Inhale, press lightly into your hands to lift your chest upward, keeping your elbows slightly bent and close to your body.",
                "Step 3: Roll your shoulders back and down, lifting through your sternum, not over-arching your neck. Keep your gaze forward or slightly up.",
                "Step 4: Avoid pushing too hard—your lower ribs should stay close to the mat for a gentle backbend.",
                "Step 5: Hold for 5 breaths, then lower back down on an exhale."
            ]
        },
        {
            title: "Bridge Pose (Setu Bandhasana)",
            steps: [
                "Step 1: Lie on your back, knees bent, feet flat on the mat hip-width apart, heels close to your sit bones. Arms rest by your sides, palms down.",
                "Step 2: Inhale, press into your feet and lift your hips toward the ceiling, rolling your spine off the mat one vertebra at a time.",
                "Step 3: Engage your glutes and core, keeping your knees over your ankles (not splaying out). Shoulders stay grounded.",
                "Step 4: Optionally, clasp your hands under your back and roll your shoulders closer together for a deeper stretch.",
                "Step 5: Hold for 5 breaths, then lower your hips slowly on an exhale."
            ]
        },
        {
            title: "Corpse Pose (Savasana)",
            steps: [
                "Step 1: Lie flat on your back on the mat, legs extended naturally, feet falling outward.",
                "Step 2: Place your arms by your sides, slightly away from your body, palms facing up to relax your shoulders.",
                "Step 3: Close your eyes and let your body sink into the mat, releasing any tension in your face, jaw, or limbs.",
                "Step 4: Breathe naturally, focusing on slow, deep inhales and exhales through your nose.",
                "Step 5: Rest here for 5-10 minutes (or longer), allowing your mind and body to fully relax."
            ]
        }
    ];

    return (
        <div id ="yoga">
            <h1>Yoga Classes</h1>
            <div className="class-options">
                <button onClick={() => handleButtonClick('Beginner')}>Beginner</button>
                <button onClick={() => handleButtonClick('Intermediate')}>Intermediate</button>
                <button onClick={() => handleButtonClick('Advanced')}>Advanced</button>
            </div>
            {showPoses && (
                <div className="poses-list">
                    {poses.map((pose, index) => (
                        <div className="pose-container" key={index}>
                            <h2>{pose.title}</h2>
                            {selectedPose === pose ? (
                                <div className="pose-steps">
                                    <h3>Steps for {pose.title}</h3>
                                    {pose.steps.map((step, stepIndex) => (
                                        <p key={stepIndex}>{step}</p>
                                    ))}
                                    <button onClick={() => setSelectedPose(null)}>Close</button>
                                </div>
                            ) : (
                                <img 
                                    src={pose.image} 
                                    alt={pose.title} 
                                    className="pose-image" 
                                    onClick={() => handleImageClick(pose)}
                                />
                            )}
                        </div>
                    ))}
                </div>
            )}
            {showIntermediatePoses && (
                <div className="intermediate-poses-list">
                    <div className="pose-container">
                        <h2>1. Warrior II (Virabhadrasana II)</h2>
                        <p>Purpose: Builds leg strength, stamina, and focus.</p>
                        <p>Step 1: Stand tall, then step your left foot back about 3-4 feet. Turn your left foot out 90 degrees so it's perpendicular to your right foot, which points forward.</p>
                        <p>Step 2: Bend your right knee until it's over your ankle (shin vertical), keeping your back leg straight and strong.</p>
                        <p>Step 3: Extend your arms out to the sides at shoulder height, palms down, right arm reaching forward, left arm back. Relax your shoulders.</p>
                        <p>Step 4: Gaze over your right fingertips, keeping your torso upright and hips opening toward the side. Press into both feet for stability.</p>
                        <p>Step 5: Hold for 5 deep breaths, then straighten your right leg, switch feet, and repeat on the left side.</p>
                    </div>
                    <div className="pose-container">
                        <h2>2. Triangle Pose (Trikonasana)</h2>
                        <p>Purpose: Stretches the sides, legs, and improves balance.</p>
                        <p>Step 1: Stand with legs wide apart (about 4 feet), right foot pointing forward, left foot turned out 45 degrees.</p>
                        <p>Step 2: Inhale, raise your arms to shoulder height, parallel to the ground, palms down.</p>
                        <p>Step 3: Exhale, shift your hips left as you reach your right hand down toward your right shin, ankle, or the floor (use a block if needed).</p>
                        <p>Step 4: Lift your left arm straight up, stacking it over your right, and turn your chest toward the ceiling. Gaze up at your left hand or forward if your neck feels strained.</p>
                        <p>Step 5: Hold for 5 breaths, feeling the stretch along your side, then rise up and switch sides.</p>
                    </div>
                    <div className="pose-container">
                        <h2>3. Plank Pose (Phalakasana)</h2>
                        <p>Purpose: Strengthens the core, arms, and shoulders.</p>
                        <p>Step 1: Start on all fours, hands directly under shoulders, fingers spread wide, knees under hips.</p>
                        <p>Step 2: Step both feet back, toes tucked, so your body forms a straight line from head to heels (like a push-up position).</p>
                        <p>Step 3: Engage your core by pulling your belly button toward your spine, and press your hands firmly into the mat to lift away from your shoulders.</p>
                        <p>Step 4: Keep your neck neutral (look slightly ahead, not down), and push back through your heels to lengthen your body.</p>
                        <p>Step 5: Hold for 5-10 breaths, then lower to your knees to rest.</p>
                    </div>
                    <div className="pose-container">
                        <h2>4. Upward-Facing Dog (Urdhva Mukha Svanasana)</h2>
                        <p>Purpose: Opens the chest and strengthens the back.</p>
                        <p>Step 1: Lie face down, legs extended back, tops of feet pressing into the mat, hands under your shoulders.</p>
                        <p>Step 2: Inhale, press into your palms to straighten your arms, lifting your chest and thighs off the mat (only toes and hands touch the ground).</p>
                        <p>Step 3: Roll your shoulders back and down, opening your chest forward, and gaze slightly upward without crunching your neck.</p>
                        <p>Step 4: Keep your legs active by pressing through your feet, and avoid sinking into your lower back—lift through your sternum.</p>
                        <p>Step 5: Hold for 5 breaths, then lower back down or flow into Downward Dog.</p>
                    </div>
                    <div className="pose-container">
                        <h2>5. Revolved Chair Pose (Parivrtta Utkatasana)</h2>
                        <p>Purpose: Strengthens legs and twists the spine.</p>
                        <p>Step 1: Stand with feet together, bend your knees, and sink into a squat like sitting in a chair, hips back.</p>
                        <p>Step 2: Bring your hands to prayer position at your chest, elbows out, keeping your knees aligned side by side.</p>
                        <p>Step 3: Exhale, twist to the right, hooking your left elbow outside your right knee, pressing your arm against your leg to deepen the twist.</p>
                        <p>Step 4: Lengthen your spine, lift your chest, and gaze upward or forward, keeping your hips low and stable.</p>
                        <p>Step 5: Hold for 5 breaths, then return to center and twist to the left side.</p>
                    </div>
                    <div className="pose-container">
                        <h2>6. Half Moon Pose (Ardha Chandrasana)</h2>
                        <p>Purpose: Challenges balance and strengthens legs.</p>
                        <p>Step 1: Start in Warrior II with your right leg forward, right knee bent, left leg back.</p>
                        <p>Step 2: Shift your weight onto your right foot, bring your right hand to the floor or a block about a foot in front of your right toes, and straighten your right leg.</p>
                        <p>Step 3: Lift your left leg parallel to the ground, flexing your foot, while opening your hips to stack them (left hip over right).</p>
                        <p>Step 4: Raise your left arm straight up, aligning it with your shoulders, and gaze forward or up at your hand if steady.</p>
                        <p>Step 5: Hold for 5 breaths, then lower your left leg and switch sides.</p>
                    </div>
                    <div className="pose-container">
                        <h2>7. Boat Pose (Navasana)</h2>
                        <p>Purpose: Strengthens the core and hip flexors.</p>
                        <p>Step 1: Sit on the mat, knees bent, feet flat, hands resting beside your hips.</p>
                        <p>Step 2: Lean back slightly, lift your feet off the ground, and straighten your legs to a 45-degree angle (or keep knees bent if easier).</p>
                        <p>Step 3: Extend your arms forward, parallel to the ground, palms facing each other, keeping your chest lifted and spine straight.</p>
                        <p>Step 4: Engage your core to avoid rounding your back, balancing on your sit bones, and gaze forward.</p>
                        <p>Step 5: Hold for 5-8 breaths, then lower your feet to rest.</p>
                    </div>
                    <div className="pose-container">
                        <h2>8. Extended Side Angle Pose (Utthita Parsvakonasana)</h2>
                        <p>Purpose: Opens hips and stretches the side body.</p>
                        <p>Step 1: From Warrior II (right leg forward), bend your right knee over your ankle, back leg straight.</p>
                        <p>Step 2: Lower your right forearm to your right thigh (or hand to the floor inside your foot), pressing gently to support your torso.</p>
                        <p>Step 3: Extend your left arm over your head, palm down, creating a long line from your left foot to your fingertips.</p>
                        <p>Step 4: Open your chest toward the ceiling, gaze up at your left arm or forward, and press into both feet for stability.</p>
                        <p>Step 5: Hold for 5 breaths, then rise up and switch sides.</p>
                    </div>
                    <div className="pose-container">
                        <h2>9. Camel Pose (Ustrasana)</h2>
                        <p>Purpose: Deepens back flexibility and opens the chest.</p>
                        <p>Step 1: Kneel on the mat, knees hip-width apart, toes tucked or tops of feet flat (whichever feels better).</p>
                        <p>Step 2: Place your hands on your lower back, fingers pointing down, and press your hips forward slightly to lengthen your spine.</p>
                        <p>Step 3: Inhale, lift your chest, then exhale, arch backward, reaching your hands toward your heels one at a time (or keep them on your back if tight).</p>
                        <p>Step 4: Tilt your head back gently if comfortable, keeping your hips over your knees, and breathe into your chest.</p>
                        <p>Step 5: Hold for 5 breaths, then slowly lift back up, hands to hips, and sit on your heels to rest.</p>
                    </div>
                    <div className="pose-container">
                        <h2>10. Thread the Needle (Parsva Balasana)</h2>
                        <p>Purpose: Relieves upper back and shoulder tension.</p>
                        <p>Step 1: Start on all fours, hands under shoulders, knees under hips, fingers spread.</p>
                        <p>Step 2: Slide your right arm under your body to the left, lowering your right shoulder and ear to the mat.</p>
                        <p>Step 3: Rest your right hand palm-up on the ground, or lift your left hand to the ceiling for a gentle twist if comfortable.</p>
                        <p>Step 4: Press your left hand into the mat to deepen the stretch, keeping your hips high and squared. Gaze wherever feels natural.</p>
                        <p>Step 5: Hold for 5 breaths, then slide your arm out and switch to the left side.</p>
                    </div>
                </div>
            )}
            {showAdvancedPoses && (
                <div className="advanced-poses-list">
                    <div className="pose-container">
                        <h2>1. Crow Pose (Bakasana)</h2>
                        <p>Purpose: Builds arm strength and balance.</p>
                        <p>Step 1: Squat down, feet close together, knees wide. Place your hands shoulder-width apart on the mat, fingers spread.</p>
                        <p>Step 2: Bend your elbows slightly, lift your hips, and rest your knees high on your upper arms (near your armpits).</p>
                        <p>Step 3: Shift your weight forward onto your hands, lifting one foot off the mat, then the other, until your feet hover behind you.</p>
                        <p>Step 4: Straighten your arms as much as possible, engage your core, and gaze slightly forward (not down) to stay balanced.</p>
                        <p>Step 5: Hold for 5-10 breaths, then lower your feet back to the mat and rest.</p>
                    </div>
                    <div className="pose-container">
                        <h2>2. Headstand (Sirsasana)</h2>
                        <p>Purpose: Strengthens the upper body and improves focus.</p>
                        <p>Step 1: Kneel, interlace your fingers, and place your forearms on the mat, elbows shoulder-width apart, forming a triangle base.</p>
                        <p>Step 2: Rest the crown of your head on the mat, cradled by your hands, and lift your hips, walking your feet closer to your head.</p>
                        <p>Step 3: Engage your core, lift both feet off the ground (knees bent at first), then slowly extend your legs straight up, heels stacked over hips.</p>
                        <p>Step 4: Press into your forearms to protect your neck, keep your body straight, and breathe evenly, gazing slightly forward.</p>
                        <p>Step 5: Hold for 5-10 breaths, then lower your legs with control and rest in Child's Pose.</p>
                    </div>
                    <div className="pose-container">
                        <h2>3. Firefly Pose (Tittibhasana)</h2>
                        <p>Purpose: Combines arm strength and hip flexibility.</p>
                        <p>Step 1: Squat with feet wider than hips, tilt forward, and slide your shoulders under your thighs, hands on the mat behind you.</p>
                        <p>Step 2: Press your palms down, lift your hips slightly, and squeeze your thighs against your upper arms for support.</p>
                        <p>Step 3: Shift your weight back onto your hands, lift your feet off the mat, and begin straightening your legs forward, toes pointed.</p>
                        <p>Step 4: Keep your arms strong, chest lifted, and gaze forward as your legs extend fully, parallel to the ground.</p>
                        <p>Step 5: Hold for 5 breaths, then bend your knees and lower your feet to release.</p>
                    </div>
                    <div className="pose-container">
                        <h2>4. Wheel Pose (Urdhva Dhanurasana)</h2>
                        <p>Purpose: Deepens back flexibility and strengthens arms.</p>
                        <p>Step 1: Lie on your back, bend your knees, feet flat hip-width apart near your hips, hands by your ears, fingers pointing toward shoulders.</p>
                        <p>Step 2: Inhale, press into your feet and hands simultaneously, lifting your hips and head off the mat into a full backbend.</p>
                        <p>Step 3: Straighten your arms and legs as much as possible, keeping your feet parallel and shoulders over wrists.</p>
                        <p>Step 4: Lift your chest toward the ceiling, relax your neck, and breathe deeply, feeling the stretch across your front body.</p>
                        <p>Step 5: Hold for 5 breaths, then tuck your chin and lower down slowly, resting on your back.</p>
                    </div>
                    <div className="pose-container">
                        <h2>5. Side Plank with Leg Lift (Vasisthasana Variation)</h2>
                        <p>Purpose: Enhances core stability and balance.</p>
                        <p>Step 1: Start in Plank Pose, then shift your weight onto your right hand and outer right foot, stacking your left foot on top.</p>
                        <p>Step 2: Lift your left arm toward the ceiling, open your chest, and press your right hand down to keep your body in a straight line.</p>
                        <p>Step 3: Engage your core, then slowly lift your left leg up, keeping it straight and strong, toes pointed or flexed.</p>
                        <p>Step 4: Gaze forward or up at your left hand, maintaining a steady breath and avoiding hip sagging.</p>
                        <p>Step 5: Hold for 5 breaths, lower your leg, then switch to the left side.</p>
                    </div>
                    <div className="pose-container">
                        <h2>6. King Pigeon Pose (Rajakapotasana)</h2>
                        <p>Purpose: Opens hips and chest deeply.</p>
                        <p>Step 1: From Downward Dog, bring your right shin forward toward your left wrist, right knee near your right wrist, left leg extended back.</p>
                        <p>Step 2: Square your hips, then bend your left knee, reaching back with your left hand to grab your left foot or ankle.</p>
                        <p>Step 3: Draw your foot closer to your head, then reach your right hand back to clasp it too, lifting your chest and gazing up or forward.</p>
                        <p>Step 4: Keep your shoulders relaxed and breathe into the stretch, maintaining balance on your right hip and left thigh.</p>
                        <p>Step 5: Hold for 5 breaths, release your foot, and switch sides.</p>
                    </div>
                    <div className="pose-container">
                        <h2>7. Scorpion Pose (Vrischikasana)</h2>
                        <p>Purpose: Advanced backbend and balance.</p>
                        <p>Step 1: Start in a forearm stand—forearms on the mat, elbows under shoulders, kick up into an inverted V with legs overhead.</p>
                        <p>Step 2: Engage your core, then slowly bend your knees, bringing your feet toward your head (toes pointed).</p>
                        <p>Step 3: Arch your back deeply, lifting your chest and gazing forward, letting your feet drop closer to your head if flexible enough.</p>
                        <p>Step 4: Press firmly into your forearms to protect your neck, keeping your breath steady and controlled.</p>
                        <p>Step 5: Hold for 5 breaths, then straighten your legs back up and lower down with control.</p>
                    </div>
                    <div className="pose-container">
                        <h2>8. Lotus in Shoulder Stand (Padma Sarvangasana)</h2>
                        <p>Purpose: Combines inversion and flexibility.</p>
                        <p>Step 1: Lie on your back, lift your legs overhead into Shoulder Stand, supporting your lower back with your hands, elbows on the mat.</p>
                        <p>Step 2: Balance on your shoulders (not your neck), then carefully bend your knees and cross your legs into full Lotus—right foot on left thigh, left foot on right thigh.</p>
                        <p>Step 3: Keep your hands on your back for support, elbows pressing down, and lift your hips over your shoulders.</p>
                        <p>Step 4: Breathe deeply, maintaining a straight spine and steady gaze forward or up, avoiding neck strain.</p>
                        <p>Step 5: Hold for 5-10 breaths, uncross your legs, and lower slowly to rest.</p>
                    </div>
                    <div className="pose-container">
                        <h2>9. Eight-Angle Pose (Astavakrasana)</h2>
                        <p>Purpose: Tests strength, flexibility, and coordination.</p>
                        <p>Step 1: Sit with legs extended, bend your right knee, and thread your right arm under your right thigh, placing your hand on the mat.</p>
                        <p>Step 2: Hook your right ankle over your left ankle, then lift your hips, shifting your weight onto your hands (left hand now on mat too).</p>
                        <p>Step 3: Bend your elbows to a 90-degree angle, lean forward, and lift both legs off the mat, extending them to the right.</p>
                        <p>Step 4: Keep your chest lifted, core tight, and gaze forward as your legs stay squeezed together and elevated.</p>
                        <p>Step 5: Hold for 5 breaths, lower your hips, and switch sides (left arm under left thigh).</p>
                    </div>
                    <div className="pose-container">
                        <h2>10. Handstand (Adho Mukha Vrksasana)</h2>
                        <p>Purpose: Full inversion for strength and balance.</p>
                        <p>Step 1: Face a wall (optional for support), place hands shoulder-width apart on the mat, fingers spread, about a foot from the wall.</p>
                        <p>Step 2: Kick one leg up (e.g., right), then the other, using momentum to bring both legs overhead, feet together or slightly apart.</p>
                        <p>Step 3: Press firmly into your hands, engage your core, and straighten your body, heels reaching up (or lightly touching the wall).</p>
                        <p>Step 4: Keep your shoulders stacked over your wrists, gaze between your hands, and breathe steadily to maintain control.</p>
                        <p>Step 5: Hold for 5-10 breaths, then lower one leg at a time with control.</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default BrowseYoga;
