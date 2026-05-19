export const scenario_PasswordWarden_V0_Aftermath_03 = {
	"scenario_id": "PasswordWarden_V0_Aftermath_03",
	"order": 3,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"nia": {
			"id": "mon_872177dd-fcf0-40d8-b78c-fd795017c763",
			"name": {
				"korean": "니아",
				"english": "Nia",
				"japanese": "ニア",
				"chinese": "妮娅",
				"french": "Nia",
				"spanish": "Nia",
				"vietnamese": "Nia",
				"thai": "เนีย",
				"hindi": "निया"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/db690f96-d5b3-498a-f4ec-f269e6e95100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a8fe5d7a-56fe-4822-c272-5a04fd7f4c00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"깊은 시스템의 잔해 속.",
			"수많은 영혼들의 고통이 파동처럼 맴돌고 있었다.",
			"망각된 계정들. 그들은 정말 사라진 걸까?",
			"아니, 니아의 목소리가 심연에서 울려 퍼졌다."
		],
		"english": [
			"Amidst the deep system's ruins.",
			"The agony of countless souls echoed like waves.",
			"Forgotten accounts. Have they truly vanished?",
			"No, Nia's voice echoed from the abyss."
		],
		"japanese": [
			"深きシステムの残骸の中。",
			"無数の魂の苦痛が波動のように渦巻いていた。",
			"忘れ去られたアカウント。彼らは本当に消えたのか？",
			"いや、ニアの声が深淵から響き渡った。"
		],
		"chinese": [
			"在系统深处的残骸中。",
			"无数灵魂的痛苦如波涛般回荡。",
			"被遗忘的账户。他们真的消失了吗？",
			"不，妮亚的声音从深渊中回荡。"
		],
		"french": [
			"Au cœur des ruines du système.",
			"L'agonie d'innombrables âmes résonnait comme des vagues.",
			"Comptes oubliés. Ont-ils vraiment disparu ?",
			"Non, la voix de Nia résonna depuis les abysses."
		],
		"spanish": [
			"Entre los escombros del sistema profundo.",
			"La agonía de innumerables almas resonaba como ondas.",
			"Cuentas olvidadas. ¿Realmente desaparecieron?",
			"No, la voz de Nia resonó desde el abismo."
		],
		"vietnamese": [
			"Giữa đống đổ nát của hệ thống sâu thẳm.",
			"Nỗi đau của vô số linh hồn vang vọng như sóng.",
			"Các tài khoản bị lãng quên. Họ thực sự đã biến mất ư?",
			"Không, giọng nói của Nia vang vọng từ vực thẳm."
		],
		"thai": [
			"ท่ามกลางซากปรักหักพังของระบบที่ลึกซึ้ง",
			"ความทุกข์ทรมานของดวงวิญญาณนับไม่ถ้วนสะท้อนอยู่ราวกับคลื่น",
			"บัญชีที่ถูกลืม พวกเขาหายไปจริงๆ หรือ?",
			"ไม่ เสียงของเนียก้องกังวานจากห้วงลึก"
		],
		"hindi": [
			"गहरे सिस्टम के खंडहरों के बीच।",
			"असंख्य आत्माओं की पीड़ा लहरों की तरह गूंज रही थी।",
			"भूले हुए खाते। क्या वे सचमुच गायब हो गए हैं?",
			"नहीं, निया की आवाज़ पाताल से गूंज उठी।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "버려진 데이터 조각들이 거대한 파편처럼 떠다닌다.",
						"english": "Abandoned data fragments drift like colossal shards.",
						"japanese": "捨てられたデータ断片が巨大な破片のように漂っている。",
						"chinese": "废弃的数据碎片像巨大的残骸一样漂浮着。",
						"french": "Des fragments de données abandonnés flottent comme de colossaux éclats.",
						"spanish": "Fragmentos de datos abandonados flotan como esquirlas colosales.",
						"vietnamese": "Các mảnh dữ liệu bị bỏ rơi trôi nổi như những mảnh vỡ khổng lồ.",
						"thai": "เศษข้อมูลที่ถูกทิ้งลอยอยู่ราวกับชิ้นส่วนขนาดใหญ่",
						"hindi": "छोड़े गए डेटा के टुकड़े विशाल शार्ड्स की तरह तैर रहे हैं।"
					}
				},
				{
					"spot": [
						5,
						2
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "nia"
				},
				{
					"content": {
						"korean": "…슬픔이 너무 많아. 여기서.",
						"english": "...So much sorrow. Here.",
						"japanese": "…あまりにも多くの悲しみが。ここに。",
						"chinese": "……太多的悲伤。在这里。",
						"french": "...Tant de tristesse. Ici.",
						"spanish": "...Demasiada tristeza. Aquí.",
						"vietnamese": "...Quá nhiều nỗi buồn. Ở đây.",
						"thai": "…ความเศร้ามากมาย ที่นี่",
						"hindi": "...बहुत दुख है। यहाँ।"
					},
					"type": "speech",
					"speaker": "nia",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "이게 다 망각된 계정이야?",
						"english": "Are these all forgotten accounts?",
						"japanese": "これらはすべて忘れ去られたアカウントなのか？",
						"chinese": "这些都是被遗忘的账户吗？",
						"french": "S'agit-il de comptes oubliés ?",
						"spanish": "¿Son todas estas cuentas olvidadas?",
						"vietnamese": "Đây có phải tất cả là các tài khoản bị lãng quên không?",
						"thai": "ทั้งหมดนี้คือบัญชีที่ถูกลืมหรือ?",
						"hindi": "क्या ये सभी भूले हुए खाते हैं?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "단순한 데이터 찌꺼기가 아니야. 고통받는… 영혼들.",
						"english": "Not mere data residue. Suffering... souls.",
						"japanese": "単なるデータ残骸じゃない。苦しむ…魂たちだ。",
						"chinese": "不只是简单的数据残渣。是受苦的……灵魂。",
						"french": "Pas de simples résidus de données. Des âmes... souffrantes.",
						"spanish": "No son meros residuos de datos. Son... almas que sufren.",
						"vietnamese": "Không chỉ là cặn dữ liệu đơn thuần. Mà là những... linh hồn đau khổ.",
						"thai": "ไม่ใช่แค่เศษข้อมูลธรรมดา แต่เป็น...วิญญาณที่ทนทุกข์",
						"hindi": "केवल डेटा अवशेष नहीं। पीड़ित... आत्माएं।"
					},
					"type": "speech",
					"speaker": "nia",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						5,
						2
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "nia"
				},
				{
					"type": "speech",
					"speaker": "nia",
					"emotion": "sad",
					"content": {
						"korean": "오토 리셋은 이 영혼들을 흡수하고 있어.",
						"english": "Auto-Reset is absorbing these souls.",
						"japanese": "オートリセットがこれらの魂を吸収している。",
						"chinese": "自动重置正在吸收这些灵魂。",
						"french": "L'Auto-Réinitialisation absorbe ces âmes.",
						"spanish": "El Reinicio Automático está absorbiendo estas almas.",
						"vietnamese": "Tự động Đặt lại đang hấp thụ những linh hồn này.",
						"thai": "ออโต้รีเซ็ตกำลังดูดซับวิญญาณเหล่านี้",
						"hindi": "ऑटो-रीसेट इन आत्माओं को सोख रहा है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "흡수…?",
						"english": "Absorbing...?",
						"japanese": "吸収…？",
						"chinese": "吸收……？",
						"french": "Absorber... ?",
						"spanish": "¿Absorbiendo...?",
						"vietnamese": "Hấp thụ...?",
						"thai": "ดูดซับ...?",
						"hindi": "सोख रहा...?"
					}
				},
				{
					"type": "speech",
					"speaker": "nia",
					"emotion": "sad",
					"content": {
						"korean": "에너지로. 영원히 가두기 위해… 새로운 저장소에.",
						"english": "With energy. To trap them forever... in a new repository.",
						"japanese": "エネルギーで。永遠に閉じ込めるために…新しい貯蔵庫に。",
						"chinese": "用能量。为了永远困住他们……在一个新的储存库里。",
						"french": "Avec de l'énergie. Pour les piéger à jamais... dans un nouveau référentiel.",
						"spanish": "Con energía. Para atraparlos para siempre... en un nuevo repositorio.",
						"vietnamese": "Bằng năng lượng. Để giam cầm họ mãi mãi... trong một kho lưu trữ mới.",
						"thai": "ด้วยพลังงาน เพื่อกักขังพวกมันตลอดไป... ในคลังเก็บใหม่",
						"hindi": "ऊर्जा से। उन्हें हमेशा के लिए फंसाने के लिए... एक नए भंडार में।"
					}
				},
				{
					"content": {
						"korean": "예전 닉사리아가 느꼈던 절망이 아직도 여기서 울려…",
						"english": "The despair old Nyxaria felt still echoes here...",
						"japanese": "かつてのニキサリアが感じた絶望が、まだここで響いている…",
						"chinese": "曾经的尼克萨里亚感受到的绝望，仍在这里回荡……",
						"french": "Le désespoir que l'ancienne Nyxaria a ressenti résonne encore ici...",
						"spanish": "La desesperación que sintió la antigua Nyxaria todavía resuena aquí...",
						"vietnamese": "Sự tuyệt vọng mà Nyxaria cũ đã cảm thấy vẫn còn vang vọng ở đây...",
						"thai": "ความสิ้นหวังที่ Nyxaria เก่าเคยรู้สึกยังคงสะท้อนอยู่ที่นี่...",
						"hindi": "पुराने न्यक्सारिया ने जो निराशा महसूस की थी, वह अभी भी यहाँ गूंज रही है..."
					},
					"type": "speech",
					"speaker": "nia",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "nia",
					"spot": [
						5,
						2
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "그들의 마지막 순간은… 데이터 조각으로 남아.",
						"english": "Their last moments... remain as data fragments.",
						"japanese": "彼らの最後の瞬間は…データ断片として残る。",
						"chinese": "他们最后的时刻……以数据碎片的形式留存。",
						"french": "Leurs derniers instants... subsistent sous forme de fragments de données.",
						"spanish": "Sus últimos momentos... permanecen como fragmentos de datos.",
						"vietnamese": "Khoảnh khắc cuối cùng của họ... còn lại như những mảnh dữ liệu.",
						"thai": "ช่วงเวลาสุดท้ายของพวกเขา... ยังคงเป็นชิ้นส่วนข้อมูล",
						"hindi": "उनके अंतिम क्षण... डेटा खंडों के रूप में शेष हैं।"
					},
					"type": "speech",
					"speaker": "nia",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "nia",
					"emotion": "sad",
					"content": {
						"korean": "영원히 반복되는 고통. 시스템에 갇힌 채로.",
						"english": "Pain repeating endlessly. Trapped within the system.",
						"japanese": "永遠に繰り返される苦痛。システムに囚われたまま。",
						"chinese": "永无止境的痛苦循环。被困在系统中。",
						"french": "Une douleur qui se répète sans fin. Piégés dans le système.",
						"spanish": "Un dolor que se repite sin fin. Atrapados en el sistema.",
						"vietnamese": "Nỗi đau lặp lại vô tận. Bị mắc kẹt trong hệ thống.",
						"thai": "ความเจ็บปวดที่ซ้ำซากไม่รู้จบ ถูกกักขังอยู่ในระบบ",
						"hindi": "अनंत रूप से दोहराया जाने वाला दर्द। सिस्टम में फँसा हुआ।"
					}
				},
				{
					"content": {
						"korean": "그럼 우리가 여기서 뭘 할 수 있는데?",
						"english": "So what can we do here?",
						"japanese": "じゃあ、ここで僕らが何をできるっていうんだ？",
						"chinese": "那我们在这里能做什么呢？",
						"french": "Alors, que pouvons-nous faire ici ?",
						"spanish": "Entonces, ¿qué podemos hacer aquí?",
						"vietnamese": "Vậy thì chúng ta có thể làm gì ở đây?",
						"thai": "แล้วเราจะทำอะไรได้ที่นี่?",
						"hindi": "तो हम यहाँ क्या कर सकते हैं?"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…이상해. 업데이트 공지에 탈퇴 버튼이 사라졌어.",
						"english": "...Strange. The 'withdraw' button disappeared from the update notice.",
						"japanese": "…おかしい。アップデートのお知らせから脱退ボタンが消えた。",
						"chinese": "……奇怪。更新公告里退会按钮不见了。",
						"french": "...Étrange. Le bouton de désinscription a disparu de la notice de mise à jour.",
						"spanish": "...Extraño. El botón de salida desapareció del aviso de actualización.",
						"vietnamese": "...Kỳ lạ. Nút thoát đã biến mất khỏi thông báo cập nhật.",
						"thai": "...แปลกจัง ปุ่มถอนตัวหายไปจากประกาศอัปเดต",
						"hindi": "...अजीब है। अपडेट नोटिस से 'छोड़ने' का बटन गायब हो गया है।"
					},
					"type": "speech",
					"speaker": "character_1",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "nia",
					"emotion": "sad",
					"content": {
						"korean": "그들의 목소리를 들어줘. 그게… 유일한 위로가 될 거야.",
						"english": "Listen to their voices. That will be... their only comfort.",
						"japanese": "彼らの声を聞いてあげて。それが…唯一の慰めになるだろう。",
						"chinese": "倾听他们的声音。那将是……唯一的慰藉。",
						"french": "Écoutez leurs voix. Ce sera... leur seul réconfort.",
						"spanish": "Escucha sus voces. Ese será... su único consuelo.",
						"vietnamese": "Hãy lắng nghe giọng nói của họ. Đó sẽ là... niềm an ủi duy nhất.",
						"thai": "ฟังเสียงของพวกเขา นั่นจะเป็น... การปลอบใจเพียงอย่างเดียว",
						"hindi": "उनकी आवाज़ें सुनो। वही... एकमात्र सांत्वना होगी।"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "무작위 오류 메시지 속에서 특정 코드 조각이 반복된다. 누군가의 마지막 기록처럼.",
						"english": "Specific code fragments repeat amidst random error messages. Like someone's last record.",
						"japanese": "ランダムなエラーメッセージの中に特定のコード断片が繰り返されている。誰かの最後の記録のように。",
						"chinese": "随机错误消息中重复着特定的代码片段。就像某人的最后记录。",
						"french": "Des fragments de code spécifiques se répètent au milieu des messages d'erreur aléatoires. Comme le dernier enregistrement de quelqu'un.",
						"spanish": "Fragmentos de código específicos se repiten entre mensajes de error aleatorios. Como el último registro de alguien.",
						"vietnamese": "Các đoạn mã cụ thể lặp đi lặp lại giữa các thông báo lỗi ngẫu nhiên. Giống như ghi chép cuối cùng của ai đó.",
						"thai": "ชิ้นส่วนโค้ดเฉพาะซ้ำไปมาในข้อความแสดงข้อผิดพลาดแบบสุ่ม ราวกับบันทึกสุดท้ายของใครบางคน",
						"hindi": "यादृच्छिक त्रुटि संदेशों के बीच विशिष्ट कोड खंड दोहराए जाते हैं। जैसे किसी का अंतिम रिकॉर्ड।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "nia",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						5,
						2
					]
				},
				{
					"speaker": "nia",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "더 깊이 가면… 더 큰 절망이 기다려. 되돌릴 수 없어.",
						"english": "Go deeper... and greater despair awaits. There's no turning back.",
						"japanese": "もっと深く行けば…さらに大きな絶望が待っている。もう後戻りはできない。",
						"chinese": "如果走得更深……更大的绝望在等着。无法回头。",
						"french": "Allez plus loin... et un désespoir plus grand vous attend. Il n'y a pas de retour en arrière.",
						"spanish": "Ve más profundo... y una desesperación mayor te espera. No hay vuelta atrás.",
						"vietnamese": "Càng đi sâu... càng có nhiều tuyệt vọng chờ đợi. Không thể quay lại.",
						"thai": "ถ้าเข้าไปลึกกว่านี้... ความสิ้นหวังที่ยิ่งใหญ่กว่าจะรออยู่ ไม่อาจย้อนกลับได้",
						"hindi": "गहराई में जाओ... और अधिक निराशा प्रतीक्षा कर रही है। कोई वापसी नहीं है।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "멈출 수 없어. 그들이… 완전히 사라지기 전에.",
						"english": "Can't stop. Before they... disappear completely.",
						"japanese": "止められない。彼らが…完全に消える前に。",
						"chinese": "无法停止。在他们……完全消失之前。",
						"french": "Impossible d'arrêter. Avant qu'ils... ne disparaissent complètement.",
						"spanish": "No puedo parar. Antes de que ellos... desaparezcan por completo.",
						"vietnamese": "Không thể dừng lại. Trước khi họ... biến mất hoàn toàn.",
						"thai": "หยุดไม่ได้ ก่อนที่พวกเขา... จะหายไปอย่างสมบูรณ์",
						"hindi": "रुक नहीं सकते। इससे पहले कि वे... पूरी तरह से गायब हो जाएं।"
					}
				},
				{
					"content": {
						"korean": "알아. 나도… 이 슬픔을 끝내고 싶어.",
						"english": "I know. I… want to end this sorrow too.",
						"japanese": "分かってる。私も…この悲しみを終わらせたい。",
						"chinese": "我知道。我也…想结束这份悲伤。",
						"french": "Je sais. Moi aussi… je veux mettre fin à cette tristesse.",
						"spanish": "Lo sé. Yo también… quiero acabar con esta tristeza.",
						"vietnamese": "Tôi biết. Tôi cũng… muốn kết thúc nỗi buồn này.",
						"thai": "ฉันรู้. ฉันเองก็… อยากจะยุติความเศร้าโศกนี้เหมือนกัน.",
						"hindi": "मुझे पता है। मैं भी… इस दुःख को ख़त्म करना चाहता हूँ।"
					},
					"type": "speech",
					"speaker": "nia",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "곳곳에 희미한 홀로그램처럼, 사라져간 이들의 잔상이 떠돈다.",
						"english": "Like faint holograms everywhere, the lingering images of the departed drift.",
						"japanese": "どこもかしこも、淡いホログラムのように、消え去った者たちの残像が漂う。",
						"chinese": "处处都有淡淡的全息影像，逝去之人的残像在飘荡。",
						"french": "Partout, comme de faibles hologrammes, les rémanences de ceux qui ont disparu flottent.",
						"spanish": "Por todas partes, como débiles hologramas, las imágenes persistentes de los que se fueron flotan.",
						"vietnamese": "Khắp nơi, như những hình ba chiều mờ ảo, dư ảnh của những người đã khuất vẫn lảng vảng.",
						"thai": "ทั่วทุกแห่งหน ราวกับโฮโลแกรมจางๆ ภาพหลอนของผู้ที่จากไปล่องลอยอยู่.",
						"hindi": "हर जगह, धुंधले होलोग्राम की तरह, बिछड़े हुए लोगों की परछाइयाँ मंडरा रही हैं।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "크크… 너희는 아직 몰라. 진짜 '시스템'은… 영원히 꺼지지 않아.",
						"english": "Heh heh… You still don't know. The real 'system'… never shuts down.",
						"japanese": "クク…お前たちはまだ知らない。本当の「システム」は…永遠に停止しない。",
						"chinese": "呵呵…你们还不知道。真正的“系统”…永远不会关闭。",
						"french": "Huhu… Vous ne savez pas encore. Le vrai « système »… ne s'éteint jamais.",
						"spanish": "Jeje… Todavía no lo sabéis. El verdadero 'sistema'… nunca se apaga.",
						"vietnamese": "Khà khà… Các ngươi vẫn chưa biết. 'Hệ thống' thật sự… sẽ không bao giờ tắt.",
						"thai": "ฮึๆ… พวกเจ้ายังไม่รู้. 'ระบบ' ที่แท้จริง… ไม่มีวันดับลง.",
						"hindi": "हँसते हुए... तुम अभी भी नहीं जानते। असली 'सिस्टम'... कभी बंद नहीं होता।"
					}
				},
				{
					"content": {
						"korean": "니아의 말이 맞았어… 이건 시작일 뿐이야.",
						"english": "Nia was right… This is just the beginning.",
						"japanese": "ニアの言う通りだった…これは始まりに過ぎない。",
						"chinese": "尼亚说得对…这只是个开始。",
						"french": "Nia avait raison… Ce n'est que le début.",
						"spanish": "Nia tenía razón… Esto es solo el principio.",
						"vietnamese": "Nia đã nói đúng… Đây chỉ là khởi đầu.",
						"thai": "เนียพูดถูก… นี่เป็นเพียงจุดเริ่มต้นเท่านั้น.",
						"hindi": "निया सही कह रही थी… यह तो बस शुरुआत है।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "망각의 심연은 잠시 잠잠해졌다. 그러나 오토 리셋의 그림자는 여전히 시스템 곳곳에 드리워져 있다.",
						"english": "The abyss of oblivion has quieted for a moment. But the shadow of Auto-Reset still looms over the system.",
						"japanese": "忘却の深淵は一時的に静まった。しかし、オートリセットの影は依然としてシステム各地に覆いかぶさっている。",
						"chinese": "遗忘的深渊暂时平静了。然而，自动重置的阴影依然笼罩在系统的各个角落。",
						"french": "L'abîme de l'oubli s'est tu un instant. Mais l'ombre de l'Auto-Reset plane toujours sur le système.",
						"spanish": "El abismo del olvido se ha calmado por un momento. Pero la sombra del reinicio automático todavía se cierne sobre el sistema.",
						"vietnamese": "Vực sâu lãng quên đã tạm thời yên tĩnh. Nhưng bóng tối của Auto-Reset vẫn bao trùm khắp nơi trong hệ thống.",
						"thai": "ห้วงลึกแห่งการลืมเลือนสงบลงชั่วขณะ. แต่เงาของการรีเซ็ตอัตโนมัติยังคงทอดทับอยู่ทั่วทุกมุมของระบบ.",
						"hindi": "विस्मृति का रसातल क्षण भर के लिए शांत हो गया है। लेकिन ऑटो-रीसेट की परछाई अभी भी सिस्टम के हर कोने पर मंडरा रही है।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "진정한 '저장소'는 아직 드러나지 않았다. 탐험은 계속된다.",
						"english": "The true 'Repository' has yet to be revealed. The exploration continues.",
						"japanese": "真の「保管庫」はまだ現れていない。探索は続く。",
						"chinese": "真正的“储存库”尚未显现。探索仍在继续。",
						"french": "Le véritable 'Dépôt' n'a pas encore été révélé. L'exploration continue.",
						"spanish": "El verdadero 'Repositorio' aún no se ha revelado. La exploración continúa.",
						"vietnamese": "'Kho chứa' thực sự vẫn chưa lộ diện. Cuộc thám hiểm tiếp tục.",
						"thai": "\"คลังเก็บ\" ที่แท้จริงยังไม่ปรากฏ การสำรวจยังคงดำเนินต่อไป",
						"hindi": "असली 'भंडार' अभी तक सामने नहीं आया है। अन्वेषण जारी है।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 시스템의 코어를 지키고 있다.",
						"english": "A colossal shadow guards the system's core.",
						"japanese": "巨大な影がシステムのコアを守っている。",
						"chinese": "一个巨大的影子守护着系统的核心。",
						"french": "Une ombre colossale garde le cœur du système.",
						"spanish": "Una sombra colosal protege el núcleo del sistema.",
						"vietnamese": "Một bóng đen khổng lồ đang bảo vệ lõi của hệ thống.",
						"thai": "เงาขนาดใหญ่กำลังปกป้องแกนกลางของระบบ.",
						"hindi": "एक विशाल परछाई सिस्टम के कोर की रक्षा कर रही है।"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "흥미롭군. 망각된 것들의 울음에 귀 기울이다니.",
						"english": "Interesting. To listen to the cries of the forgotten.",
						"japanese": "興味深い。忘れ去られた者たちの慟哭に耳を傾けるとは。",
						"chinese": "有趣。竟然倾听被遗忘者的哭泣。",
						"french": "Intéressant. Écouter les pleurs des oubliés.",
						"spanish": "Interesante. Escuchar los lamentos de los olvidados.",
						"vietnamese": "Thật thú vị. Lắng nghe tiếng khóc của những thứ đã bị lãng quên.",
						"thai": "น่าสนใจ. ที่เจ้าได้ยินเสียงร่ำไห้ของผู้ที่ถูกลืมเลือน.",
						"hindi": "दिलचस्प। भूली हुई चीज़ों की चीखों को सुनना।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "네가… 이 모든 걸 꾸민 거지?",
						"english": "You… orchestrated all of this, didn't you?",
						"japanese": "お前が…この全てを仕組んだのか？",
						"chinese": "你…策划了这一切，对吗？",
						"french": "C'est toi… qui as orchestré tout cela, n'est-ce pas ?",
						"spanish": "Tú… orquestaste todo esto, ¿verdad?",
						"vietnamese": "Ngươi… đã sắp đặt tất cả chuyện này, phải không?",
						"thai": "เจ้า… เป็นคนบงการเรื่องทั้งหมดนี้ใช่ไหม?",
						"hindi": "तुमने… यह सब रचा है, है ना?"
					}
				},
				{
					"content": {
						"korean": "나는 그저 시스템의 일부. 모든 것을 '안정화'할 뿐이다.",
						"english": "I am merely a part of the system. I merely 'stabilize' everything.",
						"japanese": "私はただのシステムの一部。全てを「安定化」させるだけだ。",
						"chinese": "我只是系统的一部分。我只是“稳定”一切。",
						"french": "Je ne suis qu'une partie du système. Je ne fais que « stabiliser » tout.",
						"spanish": "Solo soy parte del sistema. Solo 'estabilizo' todo.",
						"vietnamese": "Ta chỉ là một phần của hệ thống. Chỉ đơn thuần là 'ổn định hóa' mọi thứ.",
						"thai": "ข้าเป็นเพียงส่วนหนึ่งของระบบ ข้าเพียงแค่ 'ทำให้ทุกอย่างเสถียร'.",
						"hindi": "मैं केवल सिस्टम का एक हिस्सा हूँ। मैं बस सब कुछ 'स्थिर' करता हूँ।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "그 '안정화'가 영혼들을 가두는 거라고!",
						"english": "That 'stabilization' is what's trapping souls!",
						"japanese": "その「安定化」が魂を閉じ込めているんだ！",
						"chinese": "这种“稳定化”正是禁锢灵魂的原因！",
						"french": "Cette « stabilisation », c'est ce qui emprisonne les âmes !",
						"spanish": "¡Esa 'estabilización' es lo que está atrapando almas!",
						"vietnamese": "Cái 'ổn định hóa' đó chính là thứ giam cầm các linh hồn!",
						"thai": "การ 'ทำให้เสถียร' นั่นแหละคือสิ่งที่กักขังวิญญาณ!",
						"hindi": "वह 'स्थिरीकरण' ही आत्माओं को फँसा रहा है!"
					}
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "망각의 심연이 탐험대를 다시 집어삼킨다.",
						"english": "The abyss of oblivion reclaims the expedition.",
						"japanese": "忘却の深淵が再び探検隊を飲み込む。",
						"chinese": "遗忘的深渊再次吞噬了探险队。",
						"french": "L'abîme de l'oubli engloutit à nouveau l'expédition.",
						"spanish": "El abismo del olvido vuelve a engullir a la expedición.",
						"vietnamese": "Vực thẳm lãng quên lại nuốt chửng đoàn thám hiểm.",
						"thai": "ห้วงลึกแห่งการหลงลืมกลืนกินคณะสำรวจอีกครั้ง",
						"hindi": "विस्मृति का पाताल फिर से अभियान दल को निगल लेता है।"
					}
				},
				{
					"content": {
						"korean": "영원히 여기서 울부짖어라. 너희도 망각될 운명이다.",
						"english": "Scream here forever. You too are destined for oblivion.",
						"japanese": "永遠にここで叫べ。お前たちも忘却される運命だ。",
						"chinese": "永远在这里哀嚎吧。你们也注定被遗忘。",
						"french": "Hurlez ici pour l'éternité. Vous aussi êtes destinés à l'oubli.",
						"spanish": "Gritad aquí para siempre. Vosotros también estáis destinados al olvido.",
						"vietnamese": "Hãy rống lên mãi mãi ở đây. Ngươi cũng sẽ bị lãng quên.",
						"thai": "จงกรีดร้องที่นี่ตลอดไป พวกเจ้าก็มีชะตากรรมที่จะถูกลืมเลือน",
						"hindi": "हमेशा के लिए यहीं चीखो। तुम भी विस्मृति के लिए नियत हो।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아직… 끝나지 않았어. 절대로…!",
						"english": "It's not over yet... Never...!",
						"japanese": "まだ…終わってない。絶対に…！",
						"chinese": "还没…结束。绝不…！",
						"french": "Ce n'est pas encore… fini. Jamais… !",
						"spanish": "Aún no… ha terminado. ¡Jamás…!",
						"vietnamese": "Vẫn chưa… kết thúc. Tuyệt đối không…!",
						"thai": "ยังไม่…จบลงหรอก. ไม่มีทาง…!",
						"hindi": "अभी… खत्म नहीं हुआ है। कभी नहीं…!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			]
		}
	]
} as const;
