package com.itransform.hms.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.itransform.hms.model.ERole;
import com.itransform.hms.model.Role;
import com.itransform.hms.model.User;
import com.itransform.hms.repository.RoleRepository;
import com.itransform.hms.repository.UserRepository;

import java.util.HashSet;
import java.util.Set;

@Component
public class DataInitializer implements CommandLineRunner {

    private static final Logger logger = LoggerFactory.getLogger(DataInitializer.class);

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        logger.info("Initializing default data...");
        
        // Initialize roles if they don't exist
        initializeRoles();
        
        // Create default admin user if it doesn't exist
        createDefaultUsers();
        
        logger.info("Data initialization complete!");
    }
    
    private void initializeRoles() {
        if (roleRepository.count() == 0) {
            logger.info("Creating default roles...");
            
            Role roleUser = new Role(ERole.ROLE_USER);
            Role roleAdmin = new Role(ERole.ROLE_ADMIN);
            Role roleManager = new Role(ERole.ROLE_MANAGER);
            Role roleOwner = new Role(ERole.ROLE_OWNER);
            
            roleRepository.save(roleUser);
            roleRepository.save(roleAdmin);
            roleRepository.save(roleManager);
            roleRepository.save(roleOwner);
            
            logger.info("Default roles created.");
        } else {
            logger.info("Roles already exist, skipping role creation.");
        }
    }
    
    private void createDefaultUsers() {
        if (userRepository.count() == 0) {
            logger.info("Creating default users...");
            
            // Create admin user
            User adminUser = new User(
                    "admin",
                    "admin@hotel.com",
                    passwordEncoder.encode("password")
            );
            
            Set<Role> adminRoles = new HashSet<>();
            roleRepository.findByName(ERole.ROLE_ADMIN).ifPresent(adminRoles::add);
            roleRepository.findByName(ERole.ROLE_USER).ifPresent(adminRoles::add);
            adminUser.setRoles(adminRoles);
            
            userRepository.save(adminUser);
            logger.info("Default admin user created: admin / password");
            
            // Create regular user
            User regularUser = new User(
                    "user",
                    "user@hotel.com",
                    passwordEncoder.encode("password")
            );
            
            Set<Role> userRoles = new HashSet<>();
            roleRepository.findByName(ERole.ROLE_USER).ifPresent(userRoles::add);
            regularUser.setRoles(userRoles);
            
            userRepository.save(regularUser);
            logger.info("Default regular user created: user / password");
            
            // Create manager
            User managerUser = new User(
                    "manager",
                    "manager@hotel.com",
                    passwordEncoder.encode("password")
            );
            
            Set<Role> managerRoles = new HashSet<>();
            roleRepository.findByName(ERole.ROLE_MANAGER).ifPresent(managerRoles::add);
            roleRepository.findByName(ERole.ROLE_USER).ifPresent(managerRoles::add);
            managerUser.setRoles(managerRoles);
            
            userRepository.save(managerUser);
            logger.info("Default manager user created: manager / password");
        } else {
            logger.info("Users already exist, skipping user creation.");
        }
    }
} 