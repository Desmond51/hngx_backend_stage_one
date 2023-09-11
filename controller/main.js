exports.getInfo = async (req, res, next) => {
    const { slack_name, track } = req?.query

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const now = new Date();

    const year = now.getUTCFullYear();
    const month = now.getUTCMonth() + 1;
    const day = now.getUTCDate();
    const hours = now.getUTCHours();
    const minutes = now.getUTCMinutes();
    const seconds = now.getUTCSeconds();
    const milliseconds = now.getUTCMilliseconds();

    return next(
        res.status(200).json({
            slack_name,
            track,
            current_day: days[new Date().getDay()],
            utc_time: `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}`,
            github_repo_url: 'https://github.com/Desmond51/hngx_backend_stage_one',
            github_file_url: 'https://github.com/Desmond51/hngx_backend_stage_one/app.js',
            status_code: 200,
        })
    )
}