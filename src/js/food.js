const food = () => {

	const clickedBtn = () => {
		// variables
		const btn = document.querySelectorAll('.food__card--btn');

		// fns
		function clickedHeart(e) {
			e.preventDefault();
			const heart = this.querySelector('.food__card--heart');
			if (!heart.classList.contains('clicked')) {
				heart.classList.add('clicked');
			} else {
				heart.classList.remove('clicked');
			}
		}

		// listeners
		btn.forEach(function (item) {
			item.addEventListener('click', clickedHeart);
		});
	};

	const socialUser = (data) => {

		// variables
		const usersContainer = document.querySelector('.food__social--users');

		// fn
		const userSchema = (obj) => {
			const user = `
        <div class="food__social--user">
          <div class="photo">
            <img src="${obj.thumbnail}" alt="${obj.first} ${obj.last}">
          </div>
          <div class="bio">
            <span class="name">${obj.title} ${obj.first} ${obj.last}</span>,
            <span class="location">${obj.city}, ${obj.address}</span>. <br>
            <span class="email"><a href="mailto:${obj.email}">${obj.email}</a></span>
          </div>
        </div>
      `;
			return user;
		};

		// ajax
		$.ajax({
			url: data,
			dataType: 'json',
			success: function (data) {
				for (let i = 0; i < data.results.length; i++) {
					const user = {
						title: data.results[i].name.title,
						first: data.results[i].name.first,
						last: data.results[i].name.last,
						city: data.results[i].location.city,
						address: data.results[i].location.street,
						email: data.results[i].email,
						thumbnail: data.results[i].picture.thumbnail
					};

					const person = userSchema(user);
					$(usersContainer).append(person);

				}
			}
		});
	};

	// cb
	clickedBtn();
	socialUser('https://randomuser.me/api/?results=3&nat=us,gb');

};
