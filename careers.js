// JavaScript code for the careers page

// Fetch job data from JSON file
fetch('careers.json')
  .then(response => response.json())
  .then(data => {
    // Create job listings
    const careersSection = document.getElementById('careers');
    const jobs = data.jobs;

    jobs.forEach(job => {
      const jobListing = createJobListing(job);
      careersSection.appendChild(jobListing);
    });
  })
  .catch(error => {
    console.log('Error fetching job data:', error);
  });

// Function to create a job listing element
function createJobListing(job) {
  const jobListing = document.createElement('div');
  jobListing.classList.add('job');

  const title = document.createElement('h3');
  title.textContent = job.title;

  const description = document.createElement('p');
  description.textContent = job.description;

  const applyLink = document.createElement('a');
  applyLink.href = 'apply.html';
  applyLink.textContent = 'Apply Now';

  jobListing.appendChild(title);
  jobListing.appendChild(description);
  jobListing.appendChild(applyLink);

  return jobListing;
}
