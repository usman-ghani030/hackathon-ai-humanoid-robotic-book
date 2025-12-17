---
title: ROS 2 Communication Model
sidebar_position: 2
---

# ROS 2 Communication Model

## Understanding Communication Primitives

The ROS 2 communication model is built around several key primitives that enable nodes to exchange information effectively. These primitives are designed to handle the diverse communication needs of robotic systems, from high-frequency sensor data to low-frequency configuration updates.

## Nodes, Topics, Services, and Actions

### Nodes

Nodes are the fundamental execution units in ROS 2. Each node performs a specific function within the robotic system and communicates with other nodes through the available communication primitives.

### Topics and Publishers/Subscribers

Topics provide an asynchronous, many-to-many communication pattern ideal for streaming data such as sensor readings or robot state information. Publishers send messages to topics, while subscribers receive messages from topics they are listening to.

### Services and Clients

Services provide synchronous, request-response communication suitable for operations that require a definitive response, such as configuration changes or computational tasks with clear inputs and outputs.

### Actions

Actions provide goal-oriented communication for long-running tasks that may require feedback during execution and a final result. This is ideal for navigation tasks, manipulation actions, or other operations that take time to complete.

## Data Flow Patterns

ROS 2 supports various data flow patterns to accommodate different robotic scenarios:

- **Publish-Subscribe**: For streaming data and state updates
- **Request-Response**: For configuration and computational tasks
- **Action-Based**: For goal-oriented, long-running operations
- **Parameter Server**: For configuration management across nodes

## Quality of Service (QoS) Settings

ROS 2 provides Quality of Service settings that allow fine-tuning of communication behavior based on the requirements of specific robotic applications. These settings include reliability, durability, and liveliness policies that can be adjusted for different communication needs.

## Communication Best Practices

- Choose the appropriate communication primitive based on the interaction pattern required
- Use QoS settings to match the communication requirements of your robotic system
- Design topics and services with clear, consistent naming conventions
- Consider the frequency and size of messages when designing communication patterns

## Conclusion

The ROS 2 communication model provides the essential infrastructure for distributed robotic systems. Understanding these communication primitives is crucial for designing effective robotic applications that can handle the complex interactions required for humanoid robot control.