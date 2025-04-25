import React from 'react';
import './Yoga.css';

class yoga extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: [
        { id: 1, name: 'Surya Namaskar (Sun Salutation)', url: 'https://youtu.be/TbfeUeOCwmo?si=ghSh1W9lROd1Qv8_' },
        { id: 2, name: 'Tadasana (Mountain Pose)', url: 'https://youtu.be/2HTvZp5rPrg?si=fB3SN9LqXaFGlK1Q' },
        { id: 3, name: 'Vrikshasana (Tree Pose)', url: 'https://youtu.be/HpXz48nmuu0?si=vUwBRwKh9u8gAM_' },
        { id: 4, name: 'Adho Mukha Svanasana (Downward Facing Dog)', url: 'https://youtu.be/Km2oxamKhhA?si=UxKku_oaj1nKGgcR' },
        { id: 5, name: 'Bhujangasana (Cobra Pose)', url: 'https://youtu.be/MaFPNfHlaOk?si=9TxvHsX4fJRGpwMP' },
        { id: 6, name: 'Paschimottanasana (Seated Forward Bend)', url: 'https://youtu.be/WX_bYQMqdVg?si=1WQ9OYVZVH2gAK-O' },
        { id: 7, name: 'Dhanurasana (Bow Pose)', url: 'https://youtu.be/ILilnfnLvjU?si=A61rLYlENVpQNS6E' },
        { id: 8, name: 'Setu Bandhasana (Bridge Pose)', url: 'https://youtu.be/XUcAuYd7VU0?si=GgI9IQIhBKk7sKR6' },
        { id: 9, name: 'Vajrasana (Thunderbolt Pose)', url: 'https://youtu.be/K8l1SD3I4ys?si=Eq0bU8EO40jsJoQ3' },
        { id: 10, name: 'Shavasana (Corpse Pose)', url: 'https://youtu.be/7MViudowD60?si=_EhL3GFyt7x2azf6' },
        { id: 11, name: 'Ustrasana (Camel Pose)', url: 'https://youtu.be/J89C5KUR_7A?si=qgnYEhQIe9giJXyT' },
        { id: 12, name: 'Trikonasana (Triangle Pose)', url: 'https://youtu.be/2JXjoNLYvxc?si=Msqu1M03mf-EJqhK' },
        { id: 13, name: 'Marjariasana (Cat-Cow Pose)', url: 'https://youtu.be/lD9ZDwlHmmE?si=ViH4l5r6Ngnx4_dJ' },
        { id: 14, name: 'Malasana (Garland Pose)', url: 'https://youtu.be/mShiybR35zk?si=Mv76OJh04NaJmPjo' },
        { id: 15, name: 'Ardha Matsyendrasana (Half Lord of the Fishes Pose)', url: 'https://youtu.be/PxKjYlsQLyA?si=ZEqS2A1vweLgPKx' },
        { id: 16, name: 'Padmasana (Lotus Pose)', url: 'https://youtu.be/2qC7QB0UK1g?si=TyTjDZzlJU8Cf8Ti' },
        { id: 17, name: 'Bakasana (Crow Pose)', url: 'https://youtu.be/vzdhyx12g1k?si=RGUBXjArZ48iFBbY' },
        { id: 18, name: 'Anjaneyasana (Low Lunge Pose)', url: 'https://youtu.be/ycjCxnaNBMI?si=YjEPF5vO8MxXoMrd' },
        { id: 19, name: 'Supta Baddha Konasana (Reclining Bound Angle Pose)', url: 'https://youtu.be/LC8FRvhLF1M?si=UIGPjDFLUMgbGjpm' },
        { id: 20, name: 'Navasana (Boat Pose)', url: 'https://youtu.be/QVEINjrYUPU?si=zIjcLCDd7WAHV1se' },
        { id: 21, name: 'Utthita Trikonasana (Extended Triangle Pose)', url: 'https://youtu.be/wU3p4qU8eiw?si=k4ZGp5ZYjQ3mgN9d' },
        { id: 22, name: 'Parivrtta Trikonasana (Revolved Triangle Pose)', url: 'https://youtu.be/NTolnNcm2a0?si=JYp80iGB-KlKfUjA' },
        { id: 23, name: 'Virabhadrasana I (Warrior I Pose)', url: 'https://youtu.be/h0bVLsl6jVw?si=0osFD3yz9mdtgXWo' },
        { id: 24, name: 'Virabhadrasana II (Warrior II Pose)', url: 'https://youtu.be/DoC5mh9GxF4?si=in1ATUIzgD0pukjy' },
        { id: 25, name: 'Virabhadrasana III (Warrior III Pose)', url: 'https://youtu.be/jbtO6A09Aq0?si=1VAsVrdUm65pEiQS' },
        { id: 26, name: 'Ardha Chandrasana (Half Moon Pose)', url: 'https://youtu.be/locfsNDpp_M?si=5nU0ZSPZVJtbaDkr' },
        { id: 27, name: 'Garudasana (Eagle Pose)', url: 'https://youtu.be/LR25ad0WRXU?si=7ObsosNjLU5EkWWU' },
        { id: 28, name: 'Utkatasana (Chair Pose)', url: 'https://youtu.be/5rl8I1YVJz4?si=aT0IzdSLYkgQSbyk' },
        { id: 29, name: 'Prasarita Padottanasana (Wide-Legged Forward Bend)', url: 'https://youtu.be/VXFCeFP2Qrg?si=6D76ob6uZiw9XbN' },
        { id: 30, name: 'Padangusthasana (Big Toe Pose)', url: 'https://youtu.be/XPz8OM_EmO0?si=Zbb3jfYx_E9P1Vaq' },
        { id: 31, name: 'Sukhasana (Easy Pose)', url: 'https://youtu.be/6c3Gka2i9wg?si=ojzlXbsXTaybHsfW' },
        { id: 32, name: 'Gomukhasana (Cow Face Pose)', url: 'https://youtu.be/5VSNmqtW7uw?si=H_pKvHSO8I1nArr8' },
        { id: 33, name: 'Virasana (Hero Pose)', url: 'https://youtu.be/ozxW5-39zFo?si=u2XSlRRi6X870KdE' },
        { id: 34, name: 'Parivrtta Janu Sirsasana (Revolved Head-to-Knee Pose)', url: 'https://youtu.be/9KzQAUjK3aI?si=HLM4Znimhlg6CQ0w' },
        { id: 35, name: 'Agnistambhasana (Fire Log Pose)', url: 'https://youtu.be/WYTm1kDeCqc?si=65iTu1y6mnSxh6D3' },
        { id: 36, name: 'Bharadvajasana (Bharadvajas Twist)', url: 'https://youtu.be/Zya3rTu4Ycs?si=5Uapsv7_24CUqLq1' },
        { id: 37, name: 'Marichyasana (Sage Marichis Pose)', url: 'https://youtu.be/C0pD30Ct-Y8?si=CoL8QJuA8pqhbMnI' },
        { id: 38, name: 'Parivrtta Utkatasana (Revolved Chair Pose)', url: 'https://youtu.be/pQOK2-E-5sM?si=ycPp_DulkWYfQoWi' },
        { id: 39, name: 'Setu Bandha Sarvangasana (Bridge Pose)', url: 'https://youtu.be/XUcAuYd7VU0?si=AJlFC9lQOhczr8Ew' },
        { id: 40, name: 'Dhanurasana (Bow Pose)', url: 'https://youtu.be/CZGtSaOvb50?si=9EaLaMTYPaxb0C4S' },
        { id: 41, name: 'Bhujangasana (Cobra Pose)', url: 'https://youtu.be/wsEXREbDZoA?si=BlzMzmAJ_tuB8skY' },
        { id: 42, name: 'Salabhasana (Locust Pose)', url: 'https://youtu.be/1jflO_tZg_M?si=FNXfDJjwBaSl8W3L' },
        { id: 43, name: 'Kapotasana (Pigeon Pose – Advanced Backbend)', url: 'https://youtu.be/hVXe4JGkQiE?si=k29pLMrUQ0qHyOfl' },
        { id: 44, name: 'Salamba Sarvangasana (Shoulder Stand)', url: 'https://youtu.be/UjHTOW9x3WM?si=Z5QNHbGlHmf5ZcaR' },
        { id: 45, name: 'Halasana (Plow Pose)', url: 'https://youtu.be/t7TKCa4af-c?si=y3abufJv6La-rIeE' },
        { id: 46, name: 'Salamba Sirsasana (Headstand)', url: 'https://youtu.be/KAtfMFuL2qA?si=NN2aV8eKjR5YyHd-' },
        { id: 47, name: 'Pincha Mayurasana (Forearm Stand)', url: 'https://youtu.be/UYdVcY0T7aY?si=yaio2n8nAWY5dW3A' },
        { id: 48, name: 'Adho Mukha Vrksasana (Handstand)', url: 'https://youtu.be/5iqO6lFing4?si=3uBeZzzBPsgyvpNt' },
        { id: 49, name: 'Ananda Balasana (Happy Baby Pose)', url: 'https://youtu.be/Rg8L0_ZDick?si=6MuPEyfnk8yy_IH7' },
        { id: 50, name: 'Eka Pada Rajakapotasana (One-Legged King Pigeon Pose)', url: 'https://youtu.be/U2oimBogB4k?si=pn-Q8oZcOZRP5l-R' },
      ]
    };
  }

  render() {
    return (
      <div className="yoga-container">
        <h1 className="page-title">Yoga Exercises</h1>
        <div className="exercises-grid">
          {this.state.exercises.map((exercise) => (
            <div className="exercise-card" key={exercise.id}>
              <h3 className="exercise-name">{exercise.name}</h3>
              <a
                href={exercise.url}
                className="video-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch Video
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default yoga;