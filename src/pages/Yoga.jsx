import Lottie from "lottie-react";
import React from "react";
import cobrapose from "../animation/cobrapose.json";
import halasana from "../animation/halasana.json";
import sukh from "../animation/sukh.json";
import vrikshasana from "../animation/vrikshasana.json";
import YogaCard from "../components/YogaCard";

const Yoga = () => {
  return (
    <div className="flex flex-col">
      <YogaCard
        animationData={sukh}
        title="Sukhasana"
        subtitle="A comfortable, cross-legged, seated position, and one of the most basic poses used in yoga practice and meditation."
        description="Sit with the legs straight. Bend both legs and place the right foot under the left thigh and the left foot under, or in front of, the right calf on the floor. If it is more comfortable cross the legs in the opposite way. If it is difficult to keep the body upright then sit on a cushion at an appropriate height to make the posture comfortable. This sitting posture is recommended for those who have difficulty sitting for a long period of time in Siddhasana, Vajrasana or Padmasana."
        note="People suffering from backaches or any kind of spinal problems should not practice this."
      />

      <YogaCard
        animationData={cobrapose}
        title="Bhujangasana"
        subtitle="Bhujangasana or Cobra Pose is a reclining back-bending asana in hatha yoga and modern yoga as exercise.It is commonly performed in a cycle of asanas in Surya Namaskar (Salute to the Sun) as an alternative to Urdhva Mukha Svanasana (Upwards Dog Pose)."
        description="The pose may be entered from a prone position or from Downward Dog. The palms are placed under the shoulders, pushing down until the hips lift slightly. The backs of the feet rest on the ground, the legs outstretched; the gaze is directed forwards, giving the preparatory pose. For the full pose, the back is arched until the arms are straight, and the gaze is directed straight upwards or a little backwards. The legs remain on the ground, unlike in the similar Upward Dog pose."
        note="People suffering from backaches or any kind of spinal problems should not practice this."
      />

      <YogaCard
        animationData={halasana}
        title="Halasana"
        subtitle="Halasana,a full-body stretch that positions your body upside down
            with your feet over your head."
        description="This is also known as plough pose. This asana reduces backache and
            can help you get to sleep; Strengthens and opens up the neck,
            shoulders, abs and back muscles; Calms the nervous system, reduces
            stress and fatigue; Helps women during menopause"
      />

      <YogaCard
        animationData={vrikshasana}
        title="Vrikshasana"
        subtitle="Vrikshasana is primarily a balancing posture, it aids in improving balance – both physical and emotional."
        description="Start at the ground and feel where weight is concentrated on your standing foot. Now move up your standing leg and feel the muscles engaged with a micro-bend in your knee.When you get it right and can balance, you'll see how your body should be aligned to stay strong. If reaching your toe is too challenging, you can still get the benefits of this pose by keeping your leg bent and holding on to your knee.This posture aims to keep your body and mind from wandering and stay balanced."
      />
    </div>
  );
};

export default Yoga;
