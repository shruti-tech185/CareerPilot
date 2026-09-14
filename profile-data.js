// CareerPilot - Student Profile Data

function saveProfileData(profile) {
    localStorage.setItem("careerPilotProfile", JSON.stringify(profile));
}

function getProfileData() {
    const data = localStorage.getItem("careerPilotProfile");

    if (data) {
        return JSON.parse(data);
    }

    return null;
}
