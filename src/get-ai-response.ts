// Функция для генерации контента ответа
export const getAiResponseContent = (userMessage: string) => {
  if (
    userMessage.toLowerCase().includes("ansible") ||
    userMessage.toLowerCase().includes("playbook")
  ) {
    return `
  Вот пример Ansible playbook для настройки веб-сервера:
  
  **Репозиторий с полным проектом**: [mapp-front](https://ya.ru)
  
  \`\`\`yaml
  ---
  # webserver_setup.yml
  - name: Configure and deploy web server
    hosts: webservers
    become: yes
    vars:
      http_port: 80
      max_clients: 200
      admin_email: admin@example.com
  
    tasks:
      - name: Ensure Apache is at the latest version
        ansible.builtin.apt:
          name: apache2
          state: latest
          update_cache: yes
  
      - name: Write the Apache config file
        ansible.builtin.template:
          src: templates/apache2.j2
          dest: /etc/apache2/sites-available/000-default.conf
        notify:
          - Restart Apache
  
      - name: Ensure Apache is running
        ansible.builtin.service:
          name: apache2
          state: started
          enabled: yes
  
      - name: Deploy website content
        ansible.builtin.copy:
          src: files/website/
          dest: /var/www/html/
          owner: www-data
          group: www-data
          mode: '0644'
  
    handlers:
      - name: Restart Apache
        ansible.builtin.service:
          name: apache2
          state: restarted
  \`\`\`
  
  Этот playbook выполняет:
  1. Установку последней версии Apache
  2. Настройку конфигурации через Jinja2 шаблон
  3. Запуск и включение Apache
  4. Развертывание содержимого веб-сайта
  
  Для использования:
  1. Клонируйте репозиторий
  2. Отредактируйте переменные в \`group_vars/\`
  3. Запустите: \`ansible-playbook webserver_setup.yml\`
  `;
  }

  // Стандартный ответ, если не распознана тема Ansible
  return "Это имитация ответа от AI.";
};
