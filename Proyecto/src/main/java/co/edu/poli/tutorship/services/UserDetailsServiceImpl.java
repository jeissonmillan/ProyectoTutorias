
package co.edu.poli.tutorship.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import co.edu.poli.tutorship.model.User;
import co.edu.poli.tutorship.repository.UserRepository;



@Service
public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	private UserRepository userRepository;

	@Override
	public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {

		User user = userRepository.findByUserName(userName);

		if (user == null)
			throw new UsernameNotFoundException(userName);

		return new UserDetailsImpl(user);
	}

}
