class DJManager {
  hasDJ(member) {
    return member.permissions.has(
      "ManageGuild"
    );
  }
}

module.exports = new DJManager();
