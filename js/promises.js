// JavaScript Async Promises Example
const jobs = [
   {
      id: 1,
      position: 1,
      job: 'Web Designer',
      detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse inventore dolores aperiam consequuntur?',
   },
   {
      id: 2,
      position: 3,
      job: 'Front-End Developer',
      detail: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus repellendus! Aliquid.',
   },
   {
      id: 3,
      position: 5,
      job: 'Back-End Developer',
      detail: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit reiciendis autem minus ex!',
   },
];

const showJobs = document.getElementById('showJobs');

function getJobs() {
   setTimeout(() => {
      let output = '<h1 class="title title-larges">Get Jobs Data</h1>';

      jobs.forEach((job) => {
         output += `
            <ul class="article">
               <li>Id: ${job.id}</li>
               <li>Job: ${job.job}</li>
               <li>Position: ${job.position}</li>
               <li>Detail: ${job.detail}</li>
            </ul>
         `;
      });

      showJobs.innerHTML = output;
   }, 2000);
}

function createJob(job) {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         jobs.push(job);

         const error = false;
         if (!error) {
            resolve();
         } else {
            reject('Error: Something went wrong!');
         }
      }, 3000);
   });
}

createJob({
   id: 4,
   position: 1,
   job: 'Project Manager',
   detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi fugit dolorum ipsum possimus.',
})
   .then(getJobs)
   .catch((error) => console.log(error));
