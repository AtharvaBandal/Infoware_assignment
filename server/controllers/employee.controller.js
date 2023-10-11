import Employee from '../models/employee_model.js';
import Contact  from '../models/contact_model.js';


export const createEmployee = async (req, res) => {
  try {
   

  const { fullName, jobTitle,phoneNumber,email,address,city,state,contacts} = req.body;

  const newEmployee = await Employee.create({
    fullName,
    jobTitle,
    phoneNumber,
    email,
    address,
    city,
    state
  });
  
  for (let i = 0; i < contacts.length; i++) {
    const con = await Contact.create({ 
      name:contacts[i].name,
      phoneNumber:contacts[i].phoneNumber,
      relationship:contacts[i].relationship
    });

   // Associate Contacts with the Employee
    if (contacts && contacts.length > 0) {
      await newEmployee.setContacts(con);
  }
  }
      res.status(201).json(newEmployee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not create the Employee.' });
  }
};

export const listEmployees = async (req, res) => {
  try {
    const employees = await Employee.findAll({
      include: [{ model: Contact, as: 'contacts' }],
    });
    res.status(200).json({
      employees
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch Employees.' });
  }
};

// Update an Employee by ID
export const updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const { fullName, jobTitle, contacts } = req.body;

    // Find the Employee by ID
    const employee = await Employee.findByPk(id);

    if (!employee) {
      return res.status(404).json({ error: 'Employee not found.' });
    }

    if (fullName) {
      employee.fullName = fullName;
    }

    if (jobTitle) {
      employee.jobTitle = jobTitle;
    }

   
    // Save the Employee with the updates
    await employee.save();


    // Update associated Contacts

    

  if (contacts) {
    for (const contactData of contacts) {
      // Check if the contactData contains an ID to update an existing contact
      if (contactData.id) {
        const contact = await Contact.findByPk(contactData.id);

        if (!contact) {
          return res.status(404).json({ error: 'Contact not found.' });
        }

        if (contactData.name) {
          contact.name = contactData.name;
        }
        if (contactData.phoneNumber) {
          contact.phoneNumber = contactData.phoneNumber;
        }
        if (contactData.relationship) {
          contact.relationship = contactData.relationship;
        }

        await contact.save();
      } else {
       
        await Contact.create({
          name: contactData.name,
          phoneNumber: contactData.phoneNumber,
          relationship: contactData.relationship,
          EmployeeId: id, 
        });
      }
    }
  }

    res.status(200).json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not update the Employee.' });
  }
};

// Delete an Employee by ID
export const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the Employee by ID
    const employee = await Employee.findByPk(id);

    if (!employee) {
      return res.status(404).json({ error: 'Employee not found.' });
    }

    // Delete the Employee and its associated Contacts
    

    const con = await Contact.destroy({
      where: { EmployeeId: id }
    })
    

    await employee.destroy();
    res.status(204).json({
      status:'success',
      message:'Employee deleted successfully'
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not delete the Employee.' });
  }
};

// Get an Employee by ID
export const getEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);

    // Find the Employee by ID and include associated Contacts
    const employee = await Employee.findByPk(id, {
      include: [{ model: Contact, as: 'contacts' }],
    });

    if (!employee) {
      return res.status(404).json({ error: 'Employee not found.' });
    }

    res.status(200).json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch the Employee.' });
  }
};