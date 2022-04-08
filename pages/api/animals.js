function animals(req,res) {
    const animals = [
        'cat',
        'dog',
        'capybara',
        'ostriach',
        'pangolin',
        'bull',
        'guinie pig',
        'armadillo'
    ]
    const rando = animals[Math.floor(Math.random() * animals.length)]
    res.status(200).json({rando})
}

export default animals;
