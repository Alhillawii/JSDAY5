window.addEventListener('resize', function() {
    console.log('Window width:', window.innerWidth);
    console.log('Window height:', window.innerHeight);
});


//task21//
document.addEventListener('DOMContentLoaded', function() {
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    scrollToTopBtn.addEventListener('click', scrollToTop);
});

//task22//
document.addEventListener('DOMContentLoaded', function() {
    let preventLink = document.getElementById('preventLink');
    function preventDefaultAndDisplayMessage(event) {
        event.preventDefault(); 
        alert('Default link behavior prevented!');
    }
    preventLink.addEventListener('click', preventDefaultAndDisplayMessage);
});

//task23//
document.addEventListener('DOMContentLoaded', function() {
    var elementWithTooltip = document.getElementById('elementWithTooltip');
    var tooltip = document.getElementById('tooltip');
    function showTooltip() {
        tooltip.style.display = 'block';
    }
   
    elementWithTooltip.addEventListener('mouseenter', showTooltip);
    elementWithTooltip.addEventListener('mouseleave', this.removeEventListener)
});


///////

// const users = [
//     { name: 'John', age: 25 },
//     { name: 'Mary', age: 30 },
//     { name: 'Jane', age: 20 },
//     { name: 'Bob', age: 35 },
//   ];
//   const [filteredUsers, setFilteredUsers] = useState(users);
//   const handleFilter = (event) => {
//     const value = event.target.value;
//     const filtered = users.filter(user => user.name.includes(value));
//     setFilteredUsers(filtered);
//   };
//   return (
//     <div>
//       <input type="text" onChange={handleFilter} />
//       {filteredUsers.map(user => (
//         <div key={user.name}>
//           <p>Name: {user.name}</p>
//           <p>Age: {user.age}</p>
//         </div>
//       ))}
//     </div>
//   );
